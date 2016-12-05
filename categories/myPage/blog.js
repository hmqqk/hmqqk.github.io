/**
 * Created by liuhong on 2016/12/4.
 */
(function(){

     $(".menu").click(function(){
         if($(".bar").hasClass("active")){
             $(".bar.top,.bar.center,.bar.bottom").removeClass("active");
             $('.menu_wrap').removeClass('show').addClass('hide');
         }

         else{
             $(".bar.top,.bar.center,.bar.bottom").addClass("active");
             $('.menu_wrap').removeClass('hide').addClass('show');
         }

     });
     $('.userMsg').click(function(){
     	window.location.href="myPage.html";
     	});

    $.scrollify({
        section:"section",
        scrollbars:false,
        scrollSpeed:1500,
        before:function(){
            $('.menu').removeClass('hide').addClass('show');
        }
    });

    var top=$(window).scrollTop();
    var t1=$("#part1").offset().top;
    var t2=$("#part2").offset().top;
    var t3=$("#part3").offset().top;
    var t4=$("#part4").offset().top;
    if(top<=t1)
        $('#part1 .textExp').addClass('move');
    else if(top>t1&&top<=t2)
        $('#part2 .textExp').addClass('move');
    else if(top>t2&&top<=t3)
        $('#part3 .textExp').addClass('move');
    else if(top>t3&&top<=t4)
        $('#part4 .textExp').addClass('move');

    $(window).scroll(function(){
        var top=$(window).scrollTop();
        var t1=$("#part1").offset().top;
        var t2=$("#part2").offset().top;
        var t3=$("#part3").offset().top;
        var t4=$("#part4").offset().top;
        if(top<=t1)
            $('#part1 .textExp').addClass('move');
        else if(top>t1&&top<=t2)
            $('#part2 .textExp').addClass('move');
        else if(top>t2&&top<=t3)
            $('#part3 .textExp').addClass('move');
        else if(top>t3&&top<=t4)
            $('#part4 .textExp').addClass('move');
    });





})();