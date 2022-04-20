<?php

namespace App\Http\Controllers;

use App\Models\Banxico;
use Illuminate\Http\Request;

class BanxicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('cambio.banxico');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Banxico  $banxico
     * @return \Illuminate\Http\Response
     */
    public function show(Banxico $banxico)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Banxico  $banxico
     * @return \Illuminate\Http\Response
     */
    public function edit(Banxico $banxico)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Banxico  $banxico
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Banxico $banxico)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Banxico  $banxico
     * @return \Illuminate\Http\Response
     */
    public function destroy(Banxico $banxico)
    {
        //
    }
}
