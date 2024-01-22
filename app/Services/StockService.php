<?php

namespace App\Services;

use App\Models\Products;
use App\Models\Stock;

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

    public static function addstock($request)
    {
        try {
          
            $productId = $request->product_id;
            $product = Products::find($productId);

            if (!$product) {
                throw new \Exception('Product not found.');
            }

            // Add initial stock for the existing product
            $initialQuantity = $request->quantity; // You can adjust this based on your requirements

            Stock::create([
                'product_id' => $product->id,
                'quantity' => $initialQuantity,
                'movement_type' => 'IN', // Assuming this is the initial stock entry
                //'group_id' => $request->group_id, // Assuming you have a group_id in your stock table
            ]);

         
            $product->load('fournisseur', 'category');

            return response()->json([
                'product' => $product,
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ], 409);
        }
    }

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

    // public static function getStockSorties()
    // {
    //     $stockSorties = Stock::with(['product', 'group'])
    //     ->where('movement_type', 'OUT')
    //         ->orderBy('sortie_id')
    //         ->orderBy('created_at', 'desc')
    //         ->get();

    //     $groupedStockSorties = $stockSorties->groupBy('sortie_id');

    //     $result = [];
    //     foreach ($groupedStockSorties as $sortieId => $sorties) {
    //         $result[] = [
    //             'sortie_id' => $sortieId,
    //             'entries' => $sorties->map(function ($sortie) {
    //                 return [
    //                     'product' => $sortie->product,
    //                     'group' => $sortie->group,
    //                     'quantity' => $sortie->quantity,
    //                     // Include other relevant details as needed
    //                 ];
    //             })->toArray(),
    //         ];
    //     }

    //     return response()->json(['stockSorties' => $result], 200);
    // }

    public function updateStock($id ,$request)
    {
        try {
            // Validate request data here

            $stock = Stock::findOrFail($id);



            // Update the associated group information
            $stock->group->update([
                'group_id' => $request->input('group_id'),
            ]);

            // Update the associated products information
            $productUpdates = $request->input('products');
            foreach ($productUpdates as $productUpdate) {
                $product = $stock->products->find($productUpdate['id']);

                if ($product) {
                    $product->update([
                        'quantity' => $productUpdate['quantity'],
                        // Update other product fields as needed
                    ]);
                }
            }

            return response()->json(['message' => 'Stock updated successfully'], 200);
        } catch (\Exception $e) {
            // Handle errors
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
