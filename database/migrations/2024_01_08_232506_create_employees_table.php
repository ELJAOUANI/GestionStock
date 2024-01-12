<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id(); 
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone_number')->nullable(); 
            $table->string('poste')->nullable(); 
            $table->date('hire_date')->nullable(); 
            $table->date('date_of_birth')->nullable(); 
            $table->string('salaire')->nullable();
            $table->string('bank_account_number')->nullable();
            $table->string('education_level')->nullable();
            $table->string('employment_status')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('gender')->nullable();
            $table->text('notes')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
