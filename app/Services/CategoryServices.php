<?php
namespace App\Services;

use App\Models\Category;

class CategoryServices
{
    public static function get()
    {
        try {
            $category = Category::all();
            return response()->json(['category' => $category], 200);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 500);
        }
    }

    public static function store($request)
    {

        try {
            $category = new Category($request->all());
            $category->save();
            return response()->json([
                "category" => $category
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ], 409);
        }
    }

    public static function update($id, $request)
    {
        try {
            $category = Category::findOrFail($id);
            $category->update($request->all());
            $category->refresh();
            return response()->json(['category' => $category], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }

    public static function delete($id)
    {
        try {
            $category = Category::findOrFail($id);
            $category->delete();
            return response()->json([
                "category" => $category
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 409);
        }
    }
}
