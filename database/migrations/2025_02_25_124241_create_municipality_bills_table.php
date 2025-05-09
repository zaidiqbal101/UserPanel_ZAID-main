<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('municipality_bills', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('amount');
            $table->integer('response_code');
            $table->boolean('status');
            $table->string('message');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('municipality_bills');
    }
};

//municipalirty fetch detrails 