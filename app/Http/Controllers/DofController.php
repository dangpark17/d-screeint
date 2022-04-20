<?php

namespace App\Http\Controllers;

use App\Models\Dof;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB as FacadesDB;
class DofController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dofs = FacadesDB::table('dofs')
        ->get();
        //return response()->json($dofs);
        return view('cambio.dof',compact('dofs'));
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
