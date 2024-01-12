<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFournisseursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fournisseurs', function (Blueprint $table) {
            $table->id();
            
            $table->string("name_fournisseur")->nullable();
            $table->string('raison_social')->nullable();
            $table->string("adresse")->nullable();
            $table->string("ville")->nullable();
            $table->string("d_paiment")->nullable();
            $table->string("m_paiment")->nullable();
            $table->string("livraison")->nullable();
            $table->string('commercial_name')->nullable();
            $table->string("fix")->nullable();
            $table->string('phone_no_1')->nullable();
            $table->string('email')->nullable();
            $table->string('commercial_phone')->nullable();
            $table->string('commercial_email')->nullable();
            $table->boolean('is_active')->default(true);
            $table->string('type')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fournisseurs');
    }
}
