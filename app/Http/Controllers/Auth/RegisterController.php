<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function index()
    {
        return view('auth.register');
    }

    public function store(Request $request) {
        // validation

        $this->validate($request, [
           'name' => 'required|max:255',
           'username' => 'required',
           'email' => 'required|email|max:255',
           'password' => 'required|confirmed',


        ]);

        // store user
        // sign the user in
        // redirect
    }
}
