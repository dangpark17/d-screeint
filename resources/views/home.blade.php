@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Dashboard</h1>
@stop

@section('content')
	<div class="container">
		<div class="col-sm-3">
			<x-adminlte-info-box title="Views" text="424" icon="fas fa-lg fa-eye text-dark" theme="gradient-teal"/>

		</div>
	</div>

@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script> console.log('Hi!'); </script>
@stop
