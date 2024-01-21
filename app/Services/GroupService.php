<?php
namespace App\Services;

use App\Models\Employee;
use App\Models\Group;
use App\Models\GroupStock;
use Illuminate\Support\Facades\Validator;
class GroupService 
{   
    
    public static function store($request){ {
            try {
                $request->validate([
                     'name' => 'required|unique:groups' 
                ]);

                $group = Group::create([
                    'name' => $request->name 
                ]);

                return response()->json(['group'=> $group], 200);
            } catch (\Throwable $th) {
                return response()->json(['error' => $th->getMessage()]);
            }
        }

    }
    public static function get()
    {
        try {
            $group = Group::all() ;
            return response()->json(['group' => $group], 200);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 500);
        }
    }

    // Inside your EmployeeController
    public static function assignEmployeeToGroup($request, $groupid)
    {
        try {
            // Find the group by ID
            $group = Group::findOrFail($groupid);

            // Validate the request data
            $validator = Validator::make($request->all(), [
                'employeeIds' => 'required|array',
                'employeeIds.*' => 'exists:employees,id',
            ]);

            // Check if validation fails
            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 422);
            }

            // Retrieve employee IDs from the request
            $employeeIds = $request->input('employeeIds');

            // Check if employees are already in the group
            $existingEmployeeIds = $group->employees->pluck('id')->toArray();
            $newEmployeeIds = array_diff($employeeIds, $existingEmployeeIds);

            // If all selected employees are already in the group, return an error
            if (empty($newEmployeeIds)) {
                return response()->json(['error' => 'All selected employees are already assigned to this group.'], 422);
            }

            // Attach new employees to the group
            $group->employees()->attach($newEmployeeIds);

            // Return a success response
            return response()->json(['group' => $group, 'newEmployeeIds' => $newEmployeeIds], 200);
        } catch (\Throwable $th) {
            // Return an error response for any exceptions
            return response()->json(['error' => $th->getMessage()], 500);
        }

}
    public static function assignStockToGroup($request, $groupId)
    {
        try {
            // Validate the request data
            $request->validate([
                'stockItems' => 'required|array',
                'stockItems.*.stockId' => 'required|exists:stock,id',
                'stockItems.*.quantity' => 'required|integer|min:1',
            ]);

            // Extract stock items from the request
            $stockItems = $request->input('stockItems');

            // Associate quantities with the group
            foreach ($stockItems as $item) {
                GroupStock::create([
                    'group_id' => $groupId,
                    'stock_id' => $item['stockId'],
                    'quantity' => $item['quantity'],
                ]);
            }

            return response()->json(['success' => true, 'message' => 'Stock assigned to group successfully.']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public static function delete($id)
    { 
            try {
               $group = Group::findOrFail($id);

            $group->delete();
                return response()->json(['group' => $group ,
              
                "message" => "Group deleted successfully"
            ], 200);
            } catch (\Throwable $th) {
                return response()->json(['error' => $th->getMessage()]);
            }
        }
    }

