$(document).ready(function() {
    $("h1").hover(function() {
        $(this).css("color", "black");
    }, 
    function(){
        $(this).css("color", "white");
    })
})


$(document).ready(function() {
    $(".para1").click(function(){
        let para = $(".para2");
        let isHidden = para.is(":hidden");
        if(isHidden) {
            para.show();
        }else {
            para.hide()
        }
    })
})


$(document).ready(function() {
    $("ul>li").dblclick(function() {
        $(this).hide();
    })
})


$(document).ready(function() {
    $("input").keydown(function() {
        $(this).toggleClass(".input");
    })
})
