<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller {
    public function index() {
        $products = Product::all();
        return response()->json($products);
    }

    public function show($id) {
        $product = Product::find($id);
        return response()->json($product, 200);
    }

    public function store(Request $request) {
        $data = $request->validate([
            "name" => "required",
            "description" => "required",
            "price" => "required"
        ]);

        $result = Product::create($data);

        return response()->json($result, 200);
    }

    public function update(Request $request, $id) {
        $data = $request->validate([
            "name" => "required",
            "description" => "required",
            "price" => "required"
        ]);

        $product = Product::find($id);
        $product->update($data);

        return response()->json($product, 200);
    }

    public function destroy($id) {
        $product = Product::find($id);
        $product->delete();

        return response()->json($product, 200);
    }
}
