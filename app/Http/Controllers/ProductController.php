<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    public function index() {
        $products = Product::get();
        return $products->toJson();
    }
    public function product($id) {
        $product = Product::where('id',$id)->get();
        return $product->toJson();
    }
}
