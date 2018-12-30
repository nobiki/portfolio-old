@extends('layouts.default')

@section('head')
@endsection

@section('index')
  --- index.blade.php ---<br>
  {{ $hello }}<br>
  @foreach ($hello_array as $hello_word)
    {{ $hello_word }}<br>
  @endforeach
  <template>
    <example ref="foo"></example>
  </template>
@endsection

@section('foot')
  foot<br>
@endsection

