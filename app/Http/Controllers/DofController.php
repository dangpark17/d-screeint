<?php

namespace App\Http\Controllers;

use App\Models\Dof;
use Illuminate\Http\Request;

class DofController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('cambio.dof');
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
     * @param  \App\Models\Dof  $dof
     * @return \Illuminate\Http\Response
     */
    public function show(Dof $dof)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dof  $dof
     * @return \Illuminate\Http\Response
     */
    public function edit(Dof $dof)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dof  $dof
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Dof $dof)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dof  $dof
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dof $dof)
    {
        //
    }
}
