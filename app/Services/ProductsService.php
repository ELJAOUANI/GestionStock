<?php

namespace App\Services;

use App\Models\Products;
use App\Models\Stock;

class ProductsService
{
    public static function get()
    {
        try {
            $kpis = Products::selectRaw('category_id, SUM(quantity) as total_quantity')
                ->groupBy('category_id')

                ->get();
                
            $products = Products::with('fournisseur', 'category')
                ->orderBy('created_at', 'asc')
                ->get();

            return response()->json([
                'products' => $products,
                "kpis" => $kpis
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 500);
        }
    }

    public static function getById($id)
    {
        try {
            $product = Products::with('fournisseur', 'category')->find($id);


            if (!$product) {
                return response()->json(['error' => 'Product not found'], 404);
            }

            return response()->json(['product' => $product], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }


    public static function store($request)
    {

        try {
            // $request->validate([
            //     'name' => 'required|string',
            //     'description' => 'nullable|string',
            //     'price' => 'required|numeric',
            //     'category_id' => 'required|exists:category,id',
            //     'supplier_id' => 'required|exists:fournisseurs,id',
            //     'quantity' => 'required|integer',
            // ]);

            $product = Products::create([
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'category_id' => $request->category_id,
                'supplier_id' => $request->supplier_id,
                'quantity' => $request->quantity,
            ]);

            // Create stock movement
            Stock::create([
                'product_id' => $product->id,
                'quantity' => $request->quantity,
                'movement_type' => 'IN', // Assuming this is the initial stock entry

            ]);

            $product->load('fournisseur', 'category');
            $product->refresh();

            return response()->json([
                'product' => $product,
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ], 409);
        }
    }

    public static function update($id, $request)
    {
        try {
            $request->validate([
                'name' => 'required|string',
                'description' => 'nullable|string',
                'price' => 'required|numeric',
                'category_id' => 'required|exists:category,id',
                'supplier_id' => 'required|exists:fournisseurs,id',
                'quantity' => 'required|integer',
            ]);
            $product = Products::findOrFail($id);

            $product->update($request->all());
            $product->refresh();

            return response()->json(['product' => $product], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }

    public static function delete($id)
    {
        try {
            $product = Products::findOrFail($id);
            $product->delete();
            return response()->json([
                "message" => "Product deleted successfully"
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 409);
        }
    }
    public static function stockout($request)
    {
        try {
            $productsData = $request->input('products');

            // Ensure there are products in the request
            if (empty($productsData)) {
                throw new \Exception('No products found in the request.');
            }

            // Extract the group_id from the first product
            $firstProduct = $productsData[0];
            $groupId = $firstProduct['group_id'];

            // Loop through each product in the request
            foreach ($productsData as $productData) {
                $productId = $productData['product_id'];
                $quantity = $productData['quantity'];

                $product = Products::find($productId);

                if (!$product) {
                    throw new \Exception('Product not found.');
                }

                // Check if there is enough stock available
                $availableStock = $product->currentStock;

                // Ensure that $quantity has a valid value
                if ($quantity <= 0) {
                    throw new \Exception('Invalid quantity.');
                }

                // Check if there is enough stock available
                if ($availableStock < $quantity) {
                    throw new
                    \Exception("Insufficient stock available for product: {$product->name} (ID: {$product->id}).");;
                }

                // Create outgoing stock movement
                Stock::create([
                    'product_id' => $productId,
                    'quantity' => $quantity,
                    'movement_type' => 'OUT',
                    'group_id' => $groupId, // Use the common group_id
                ]);

                // Update the available stock for the product
                $product->refresh();
            }

            return response()->json([
                'message' => 'Products affected successfully.',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ], 409);
        }
    }

    public static function getProductsByCategory($request)
    {
        try {
            $categoryId = $request->query('category_id');

            $products = Products::where('category_id', $categoryId)->get();

            return response()->json([
                'products' => $products,
    
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }

}
