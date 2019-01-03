@extends('layouts.default')

@section('head')
  <div class="inner">
    <template>
      <myname ref="ref_name"></myname>
    </template>
  </div>
@endsection

@section('index')

<div class="parallax-page scrollbox1">スクロールコンテンツ１</div>
<div class="parallax-page parallax-bg img-bg-01">固定背景１</div>
<div class="parallax-page scrollbox2">スクロールコンテンツ２</div>
<div class="parallax-page parallax-bg img-bg-02">固定背景２</div>
<div class="parallax-page scrollbox3">スクロールコンテンツ３</div>
<div class="parallax-page parallax-bg img-bg-03">固定背景３</div>
<div class="parallax-page scrollbox4">スクロールコンテンツ４</div>
<div class="parallax-page parallax-bg img-bg-04">固定背景４</div>
<div class="parallax-page scrollbox5">スクロールコンテンツ５</div>
<div class="parallax-page parallax-bg img-bg-05">固定背景５</div>
<div class="parallax-page scrollbox6">スクロールコンテンツ６</div>

@endsection

@section('foot')
foot<br>
@endsection
