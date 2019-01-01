<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  @include('partials.meta')
</head>

<body>
  <div id="app">
    @include('partials.head')
    @yield('index')
    @include('partials.foot')
  </div>
</body>

</html>
