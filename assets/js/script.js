"use strict"

$(function(){


$(".open-icon").click(function(){
    $(".sidebar").removeClass("move-sidebar")
    $(this).addClass("d-none")
    $(".close-icon").removeClass("d-none")
})



$(".close-icon").click(function(){
    
    $(".sidebar").addClass("move-sidebar")
    $(".open-icon").removeClass("d-none")
    $(this).addClass("d-none")
})

})