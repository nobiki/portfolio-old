@extends('layouts.default')

@section('head')
  head<br>
@endsection

@section('index')
  --- index.blade.php ---<br>
  {{ $hello }}<br>
  @foreach ($hello_array as $hello_word)
    {{ $hello_word }}<br>
  @endforeach
@endsection

@section('foot')
  foot<br>
@endsection

