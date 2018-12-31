@extends('layouts.default')

@section('head')
@endsection

@section('index')
  <div class="notification">
    This container is <strong>centered</strong> on desktop.
  </div>
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

