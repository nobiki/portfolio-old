<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
@include('partials.head')
</head>
<body>
  <div id="app">
    @yield('index')
    @include('partials.foot')
  </div>
</body>
</html>
