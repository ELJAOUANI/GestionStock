<?php

namespace App\Services;

use App\Models\Fournisseur;
use App\Models\Products;
use App\Models\Stock;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class StockService
{

    public static function get()
    {

        try {
            $products = Products::all();

            $stock = [];

            foreach ($products as $product) {
                $stock[] = [
                    'id' => $product->id,
                    'name' => $product->name, // Assuming the product name column is 'name', adjust as needed
                    'available_stock' => $product->currentStock,
                ];
            }

            return response()->json([
                'stock' => $stock,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage(),
            ], 500);
        }
    }


    public static function addStock($request)
    {
        try {



            //$purchaseDate = Carbon::parse($purchaseDate);
            // Retrieve product data from the request
            $fournisseurId = $request->input('fournisseur_id');
            $productId = $request->input('product_id');
            $quantity = $request->input('quantity');
            $purchaseDate = $request->input('purchase_date');
            $price_unit = $request->input('price');
            
            $fournisseur = Fournisseur::find($fournisseurId);

            if (!$fournisseur) {
                throw new \Exception("Fournisseur with ID $fournisseurId not found.");
            }
            // Validate required fields
            if (!$productId || !$quantity || !$purchaseDate) {
                throw new \Exception('Product details are incomplete.');
            }

            // Find the product in the database
            $product = Products::find($productId);

            if (!$product) {
                throw new \Exception("Product with ID $productId not found.");
            }

            // Check if the 'image' key is provided and not empty
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imagePath = $image->store('bon_achats', 'public'); // Store the image in the public folder
            } else {
                $imagePath = null; // Set to null if no image is provided
            }

            // Add initial stock for the existing product
            $result = Stock::create([
                'product_id' => $product->id,
                'quantity' => $quantity,
                'movement_type' => 'IN',
                'purchase_date' => $purchaseDate,
                'image_path' => $imagePath,
                'price' => $price_unit,
                'fournisseur_id' => $fournisseur->id,
            ]);
            $product->refreshCurrentStock();

            // Load additional relationships for the product
            $product->load('fournisseur', 'category');

            return response()->json([
                'message' => 'Product added to stock successfully.',
                "stockadded" => $result
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage(),
            ], 409);
        }
    }

    //Array of product 

    // public static function addStock($request)
    // {
    //     try {
    //         // Retrieve all products data from the request
    //         $productsData = $request->input('products');

    //         // Ensure there are products in the request
    //         if (empty($productsData) || !is_array($productsData)) {
    //             throw new \Exception('No valid products found in the request.');
    //         }

    //         foreach ($productsData as $productData) {
    //             // Check if $productData is an array
    //             if (!is_array($productData)) {
    //                 throw new \Exception('Invalid product data format. Expected an array.');
    //             }

    //             // Extract product details from the array
    //             $productId = $productData['product_id'] ?? null;
    //             $quantity = $productData['quantity'] ?? null;
    //             $purchaseDate = $productData['purchase_date'] ?? null;

    //             // Validate required fields
    //             if (!$productId || !$quantity || !$purchaseDate) {
    //                 throw new \Exception('Product details are incomplete.');
    //             }

    //             // Find the product in the database
    //             $product = Products::find($productId);

    //             if (!$product) {
    //                 throw new \Exception("Product with ID $productId not found.");
    //             }

    //             // Check if the 'image' key is provided and not empty
    //             if (array_key_exists('image', $productData) && $request->hasFile('image')) {
    //                 $image = $request->file('image');
    //                 $imagePath = $image->store('bon_achats', 'public'); // Store the image in the public folder

    //                 // Add initial stock for the existing product
    //                 Stock::create([
    //                     'product_id' => $product->id,
    //                     'quantity' => $quantity,
    //                     'movement_type' => 'IN',
    //                     'purchase_date' => $purchaseDate,
    //                     'image_path' => $imagePath,
    //                 ]);
    //             } else {
    //                 throw new \Exception('No valid image file provided.');
    //             }

    //             // Load additional relationships for the product
    //             $product->load('fournisseur', 'category');
    //         }

    //         return response()->json([
    //             'message' => 'Products added to stock successfully.',
    //         ], 201);
    //     } catch (\Throwable $th) {
    //         return response()->json([
    //             'error' => $th->getMessage(),
    //         ], 409);
    //     }
    // }


    public static function getStockSorties()
    {
        $stockSorties = Stock::with(['product', 'group'])
        ->where('movement_type', 'OUT')
            ->orderBy('created_at', 'desc')
            ->get()
            ->groupBy('sortie_id'); // Remove the extra groupBy

        $result = [];
        foreach ($stockSorties as $sortieId => $sorties) {
            $date = $sorties->first()->created_at->format('Y-m-d H:i:s'); // Get the date from the first stock movement
            $result[] = [
                'sortie_id' => $sortieId, 
                'date' => $date,
                'sorties' => $sorties->map(function ($sortie) {
                    return [
                        'product' => $sortie->product,
                        'group' => $sortie->group,
                        'quantity' => $sortie->quantity,
                        // Include other relevant details as needed
                    ];
                })->toArray(),
            ];
        }

        return response()->json(['stockSorties' => $result], 200);
    }

   

    public static function getStockEntries()
    {
        try {
            // Retrieve stock entries where movement_type is 'IN'
            $stockEntries = Stock::with('product')->where('movement_type', 'IN')->get();

            // You can load additional relationships here if needed

            return response()->json([
                'stock_entries' => $stockEntries,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage(),
            ], 404);
        }
    }


    public static function getStockSortieById($id)
    {
        try {
            $stockksortiie = Stock::with(['product', 'group'])
                ->where('sortie_id', $id)
                ->where('movement_type', 'OUT')
                ->orderBy('created_at', 'desc')
                ->get();

            if ($stockksortiie->isEmpty()) {
                return response()->json(['error' => 'Stock sortie not found.'], 404);
            }

            // Return the data in the desired format
            return response()->json(['stockksortiie' => $stockksortiie], 200);
        } catch (\Exception $e) {
            // Handle any exceptions
            return response()->json(['error' => 'Internal server error.'], 500);
        }
    }

    public static function updateStockOut($request, $sortieId)
    {
        DB::beginTransaction(); // Begin database transaction

        try {
            // 1. Retrieve existing stockout movements
            $stockoutMovements = Stock::where('sortie_id', $sortieId)->get();

            // 2. Validate updated data
            $validatedData = $request->validate([
                'products' => 'required|array',
                'products.*.product_id' => 'required|integer|exists:products,id',
                'products.*.quantity' => 'required|numeric|min:0',
                'group_id' => 'nullable|integer|exists:groups,id', // Optional validation for group_id
            ]);

            // 3. Apply updates to stockout movements
            foreach ($validatedData['products'] as $productData) {
                $productId = $productData['product_id'];
                $newQuantity = $productData['quantity'];

                // Check if the requested quantity is available in stock
                $availableStock = DB::select(DB::raw("SELECT current_stock FROM products WHERE id = $productId"));


                if ($newQuantity > $availableStock) {
                    // If there is insufficient stock, throw an exception
                    throw new \Exception("Insufficient stock available for product with ID $productId.");
                }

                $movement = $stockoutMovements->firstWhere('product_id', $productId);

                if ($movement) {
                    // Check if there is enough stock available before updating
                    $availableStockBeforeUpdate =
                        DB::select(DB::raw("SELECT current_stock FROM products WHERE id = $productId"));

                    if ($availableStockBeforeUpdate >= $newQuantity) {
                        // Update existing movement
                        $movement->quantity = $newQuantity;
                        $movement->save();
                    } else {
                        // If there is insufficient stock before the update, throw an exception
                        throw new \Exception("Insufficient stock available for product with ID $productId.");
                    }
                } else {
                    // Add new movement
                    Stock::create([
                        'product_id' => $productId,
                        'quantity' => $newQuantity,
                        'movement_type' => 'OUT',
                        'sortie_id' => $sortieId,
                        'group_id' => $validatedData['group_id'] ?? null, // Use optional group_id if provided
                    ]);
                }

                // Update the product's current stock
                $product = Products::find($productId);
                $product->refreshCurrentStock();
            }

            // 4. Recalculate and update product stock levels
            $products = Products::whereIn('id', array_column($validatedData['products'], 'product_id'))->get();
            foreach ($products as $product) {
                $product->refreshCurrentStock();
            }

            // 5. Handle removed products
            $productIdsInRequest = array_column($validatedData['products'], 'product_id');
            $productIdsToDelete = $stockoutMovements->whereNotIn('product_id', $productIdsInRequest)->pluck('product_id')->toArray();

            foreach ($productIdsToDelete as $productIdToDelete) {
                $movementToDelete = $stockoutMovements->firstWhere('product_id', $productIdToDelete);

                if ($movementToDelete) {
                    // Check if there is enough stock available before deleting
                    $availableStockToDelete = Products::where('id', $productIdToDelete)->value('current_stock');

                    if ($availableStockToDelete >= $movementToDelete->quantity) {
                        $movementToDelete->delete();
                    }
                }
            }

            DB::commit(); // Commit database changes
            $updatedMovements = Stock::where('sortie_id', $sortieId)->get();

            return response()->json([
                'message' => 'Stockout updated successfully.',
                'updatedData' => [
                    'group_id' => $validatedData['group_id'] ?? null,
                    'products' => $updatedMovements->toArray(),
                ],
            ], 200);
        } catch (\Throwable $th) {
            DB::rollBack(); // Rollback changes if an error occurs
            \Log::error($th->getMessage()); // Log the error
            return response()->json([

                'error' => 'Failed to update stockout.',
                'details' => $th->getMessage(), // Optionally include error details for debugging
            ], 409);
        }
    }
}
   
