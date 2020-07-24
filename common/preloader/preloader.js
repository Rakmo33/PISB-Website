$next = 1; // fixed, please do not modfy;
$current = 0; // fixed, please do not modfy;
$interval = 400; // You can set single picture show time;
$fadeTime = 200; // You can set fadeing-transition time;
$imgNum = 6; // How many pictures do you have

$(document).ready(function () {
  //NOTE : Div Wrapper should with css: relative;
  //NOTE : img should with css: absolute;
  //NOTE : img Width & Height can change by you;
  $(".fadeImg").css("position", "relative");
  $(".fadeImg img").css({
    position: "absolute",
    width: "300px",
    height: "300px",
  });

  nextFadeIn();
});

function nextFadeIn() {
  //make image fade in and fade out at one time, without splash vsual;
  $(".fadeImg img")
    .eq($current)
    .delay($interval)
    .fadeOut($fadeTime)
    .end()
    .eq($next)
    .delay($interval)
    .hide()
    .fadeIn($fadeTime, nextFadeIn);

  // if You have 5 images, then (eq) range is 0~4
  // so we should reset to 0 when value > 4;
  if ($next < $imgNum - 1) {
    $next++;
  } else {
    $next = 0;
  }
  if ($current < $imgNum - 1) {
    $current++;
  } else {
    $current = 0;
  }

  // out
  if ($next === 4 || $next === 5 || $next === 0) {
    $fadeTime = 200; // You can set fadeing-transition time;
    $interval = 50; // You can set single picture show time;

    // in
  } else {
    $fadeTime = 450; // You can set fadeing-transition time;
    $interval = 200; // You can set single picture show time;
  }

  if ($next === 4) {
    $interval = 700;
  }

  // if ($next === 4 || $next === 5 || $next === 3) {
  //   $interval = 50; // You can set single picture show time;
  // } else {
  //   $interval = 400; // You can set single picture show time;
  // }
}
