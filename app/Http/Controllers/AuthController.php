<?php

namespace App\Http\Controllers;

use App\Mail\ForgetPassword;
use App\Models\Employee;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $authenticatedUser = Auth::user();
            Log::info('Authenticated User:', ['user_id' => $authenticatedUser->id, 'email' => $authenticatedUser->email]);

            $user = User::with('roles', 'employee')->find($authenticatedUser->id);

            $token = $user->createToken('API Token')->plainTextToken;
            return response()->json(
                [
                    'user' => $user,
                    'token' => $token,
                    'token_type' => 'Bearer',
                ],
                200
            );
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }
    public function register(Request $request)
    {
        try {
            DB::beginTransaction();

            $request->validate([
                'email' => 'required|email|unique:users',
                'password' => 'required|string|min:8',
                'date_of_birth' => 'required|date',
                'gender' => 'required|string',
                'role' => 'required|string',
                'name' => 'required|string',
            ]);

            $employee = Employee::create([
                'name' => Str::title($request->name),
                'email' => Str::lower($request->email),
                'date_of_birth' => Carbon::parse($request->date_of_birth)->format('Y-m-d'),
                'gender' => $request->gender,
            ]);

            $user = User::create([
                'email' => Str::lower($request->email),
                'password' => bcrypt($request->password),
                'name' => $request->name,
                'employee_id' => $employee->id,
            ]);

            $role = Role::where('name', $request->role)->first();

            if ($role) {
                $user->assignRole($role);
            } else {
                DB::rollBack();
                return response()->json(['error' => 'Role not found.'], 404);
            }

            $employee->update(['user_id' => $user->id]);

            $token = $user->createToken('API TOKEN')->plainTextToken;
            DB::commit();

            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
            ], 201);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['error' => 'Error: ' . $th->getMessage()], 500);
        }
    }


    public function forgetPassword()
    {
        try {
            $user = User::where('email', request()->email)->first();
            if ($user) {
                $randomPassword = Str::random(12);
                $user->update(['password' => bcrypt($randomPassword)]);
                Mail::to($user->email)->send(new ForgetPassword($user, $randomPassword));
                return response()->json(['message' => 'Password updated successfully', 'new_password' => $randomPassword], 200);
            } else {
                return response()->json(['error' => 'User not found'], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['error' => 'error ' . $th->getMessage()], 500);
        }
    }



    public function logout(Request $request)
    {
        /** @var User $user */
        $user = Auth::user();
        // Revoke the token that was used to authenticate the current request...
        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }
}
