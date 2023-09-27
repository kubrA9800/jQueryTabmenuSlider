"use strict"

$(function(){


let header = $(".item")
let text = $(".items")

header.click(function(){
    $(".active-tab").removeClass("active-tab")
    $(this).addClass("active-tab")

    var index = $(this).index();
    text.hide()
    text.eq(index).show()
})


})

