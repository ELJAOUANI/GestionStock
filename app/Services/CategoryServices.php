<?php
namespace App\Services;

use App\Models\Category;

class CategoryServices
{
    public static function get()
    {
        try {

         $category = Category::with('parent')->get();
            return response()->json(['category' => $category], 200);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 500);
        }
    }

    public static function store($request)
    {

        try {
            $request->validate([
                'name' => 'required|string',
                'description' => 'required|string',
                'parent_id' => 'nullable|exists:category,id',
            ]);

            $category = Category::create([
                'name' => $request->name,
                'description' => $request->description,
                'parent_id' => $request->parent_id,
            ]);
            return response()->json([
                "category" => $category
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
                'description' => 'required|string',
                'parent_id' => 'nullable|exists:category,id',
            ]);

            $category = Category::findOrFail($id);

            $category->update([
                'name' => $request->name,
                'description' => $request->description,
                'parent_id' => $request->parent_id,
            ]);

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
                "message" => "Category deleted successfully"
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 409);
        }
    }
}
