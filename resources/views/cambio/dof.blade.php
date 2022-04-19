@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Diario Oficial de la federación</h1>
@stop

@section('content')
	<div class="container">

		@if (count($errors) > 0 )

		    <div class="alert alert-danger" role="alert">
		        <ul>

		                @foreach ( $errors->all() as $error )
		                    <li>{{ $error }}</li>
		                @endforeach
		        </ul>
		    </div>


		@endif
		<div class="col-sm-5">
			{{-- Complex / Extra tool / Footer --}}
			<x-adminlte-card title="Convertidor de Dolares a Pesos" theme="maroon" theme-mode="outline"
			    class="elevation-3" body-class="bg-maroon" header-class="bg-light"
			    footer-class="bg-maroon border-top rounded border-light"
			    icon="fas fa-lg fa-bell" collapsible removable maximizable>
			    <x-adminlte-input type="number" name="cambio" placeholder="Dolares a convertir"/>			    
			    <x-slot name="footerSlot">
			        <x-adminlte-button class="d-flex ml-auto" theme="light" label="Convertir"
			            icon="fas fa-sign-in"/>
			    </x-slot>
			</x-adminlte-card>
		</div>
	</div>    
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">

@stop

@section('js')
    <script> console.log('Hi!'); </script>
@stop