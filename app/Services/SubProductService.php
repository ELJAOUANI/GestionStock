<?php

namespace App\Services;

use App\Models\Products;
use App\Models\SubProduct;

class SubProductService
{
    public static function get()
    {
        try {

            $subProducts  = SubProduct::all();
            return response()->json(['subProducts' =>$subProducts], 200);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 500);
        }
    }

    public static function store($request)
    {

        try {
            $request->validate([
                'name' => 'required|string',
                'stock_quantity' => 'required|integer',
                'description' => 'nullable|string',
                'price' => 'required|numeric',
                'product_id' => 'required|exists:products,id',
                'supplier_id' => 'required|exists:fournisseurs,id',
                'category_id' => 'required|exists:category,id',
            ]);

            $subProducts = SubProduct::create($request->all());

            return response()->json([
                "subProducts" => $subProducts
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
                'stock_quantity' => 'required|integer',
                'description' => 'nullable|string',
                'price' => 'required|numeric',
                'product_id' => 'required|exists:products,id',
                'supplier_id' => 'required|exists:fournisseurs,id',
                'category_id' => 'required|exists:category,id',
            ]);
            $subProducts = SubProduct::findOrFail($id);

            $subProducts->update($request->all());
            $subProducts->refresh();

            return response()->json(['subProducts' => $subProducts], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }

    public static function delete($id)
    {
        try {
            $subProducts = SubProduct::findOrFail($id);
            $subProducts->delete();
            return response()->json([
                "message" => "subProducts deleted successfully"
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 409);
        }
    }
}
