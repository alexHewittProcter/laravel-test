<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Product;

class AddProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        $productArray = [
            ['Test song',11.99],
            ['Song two',9.99],
            ['Amazon song',0.99],
            ['Golden tribes',4.99],
            ['Great tunes',2.99],
            ['Four tones', 3.99]
        ];
        foreach ($productArray as $value) {
            $product = new Product();
            $product->title = $value[0];
            $product->price = $value[1];
            $product->save();
        }
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
