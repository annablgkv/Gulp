
// slider logic (start)
$('#carouselExampleIndicators').mouseover(function () {
  $('.buttonsSlider li').css({
    "opacity": "1",
  })
})

$('#carouselExampleIndicators').mouseout(function () {
  $('.buttonsSlider li').css({
    "opacity": "0",
  })
})
// slider logic (end)