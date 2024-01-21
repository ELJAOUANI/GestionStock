<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('stock_quantity');
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2);
            $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('category_id')->nullable()->constrained('category')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('supplier_id')->nullable()->constrained('fournisseurs')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('product_id')->nullable()->constrained('products')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('sub_products');
    }
}
