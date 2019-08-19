<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiTest extends TestCase
{
    /**
     * A test to get all products from the database
     *
     * @return void
     */
    public function testGettingAllProducts()
    {
        $response = $this->get('/api/products');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            ['id','title','price']
        ]);
    }

    /**
     * A test to get a specific product from the database
     * 
     * @return void
     */
    public function testGetIndividualProduct() {
        $response = $this->get('/api/product/1');
        $response->assertStatus(200);
        $response->assertJson([['id'=>1,'title'=>'Test song','price'=>11.99]]);
    }

}
