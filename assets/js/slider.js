"use strict"


$(function(){

$(".icons .right").click(function(){

    let activeSliders = $(".active-slider")

    if($(activeSliders).next().length !=0){
        $(activeSliders).removeClass("active-slider")
        $(activeSliders).next().addClass("active-slider")
    }
    else{
        $(activeSliders).removeClass("active-slider")
        $(activeSliders).parent().children().first().addClass("active-slider")
    }
})



$(".icons .left").click(function(){

    let activeSliderss = $(".active-slider")

    if($(activeSliderss).prev().length !=0){
        $(activeSliderss).removeClass("active-slider")
        $(activeSliderss).prev().addClass("active-slider")
    }
    else{
        $(activeSliderss).removeClass("active-slider")
        $(activeSliderss).parent().children().last().addClass("active-slider")
    }
})




})

