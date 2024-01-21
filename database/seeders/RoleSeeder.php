<?php

namespace Database\Seeders;

use Exception;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\DB;



class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        try {
            DB::beginTransaction();

            Role::create(['name' => 'Administrateur', 'guard_name' => 'api']);
            Role::create(['name' => 'gst_stock', 'guard_name' => 'api']);
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
        }
    }
}
