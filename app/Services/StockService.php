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
            ->groupBy(function ($sortie) {
                return $sortie->created_at->toDateTimeString();
            });

        $result = [];
        foreach ($stockSorties as $dateTime => $sorties) {
            $result[] = [
                'date' => $dateTime,
                'sorties' => $sorties->map(function ($sortie) {
                    return [
                        'product' => $sortie->product,
                        'group' => $sortie->group,
                        // Include other relevant details as needed
                    ];
                })->toArray(),
            ];
        }

        return response()->json(['stockSorties' => $result], 200);
    }

}
