<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TopController extends Controller
{
    public function index()
    {
        $hello = 'Hello, World';
        $hello_array = ['1','2','3'];

        return view('top/index', compact('hello', 'hello_array'));
    }
}
