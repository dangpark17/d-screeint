@extends('adminlte::page')

@section('title', 'Diario Oficial de la Federación')

@section('content_header')
    <h1>Diario Oficial de la federación</h1>
@endsection

@section('content')
	<div class="container" >

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
			<x-adminlte-card title="Convertidor de Dolares a Pesos" theme="maroon" theme-mode="outline"
            class="elevation-3" body-class="bg-maroon" header-class="bg-light"
            footer-class="bg-maroon border-top rounded border-light"
            icon="fas fa-lg fa-bell" collapsible removable maximizable>
                    <x-slot name="footerSlot">
                        <Covertidor></Covertidor>
                    </x-slot>
        </x-adminlte-card>

		</div>
	</div>
    @endsection

    @section('js')
        <script></script>
    @endsection
