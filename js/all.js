$(document).ready(function () {
    


    var open = 0;

    $(".box").click(function (event) {
        if(open == 0){
            $(this).addClass("active");
            $(this).siblings().find(".box_left").hide();
            
            open++;
            
        }else{
            $(this).removeClass("active");
            $(this).siblings().find(".box_left").show();
            open--;
        }


    });

    $(".menu > li > a[href*=#]").click(function (event) {
        // event.preventDefault();
        var target = $($(this).attr("href")).offset().top;
        // console.log(target);
        $(".main").animate({
            scrollTop: target
        }, 800);
    });

    
});