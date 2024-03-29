<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupStockTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group_stock', function (Blueprint $table) {
            $table->id();
            $table->foreignId('group_id')->constrained('groups')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('stock_id')->constrained('stock')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('quantity');
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
        Schema::dropIfExists('group_stock');
    }
}
