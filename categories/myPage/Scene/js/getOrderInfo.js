/*getOrderInfo_part*/
document.write("<script type='text/javascript' src='js/jquery.js'></script>");
document.write("<script type='text/javascript' src='js/jquery.md5.js'></script>");

jQuery(document).ready(function() {


    var token1 = "3714861a5b5d78f9bd5d25cb25b371a1357";
    var thirdpartyno1 = "1234567890127";

    jQuery.ajax({
        url: "http://www.52uku.net/webservice.asmx/getOrderInfo?jsoncallback=?",
        type: "GET",
        contentType: "application/json",
        data: {
            "token": token1,
            "thirdpartyno": thirdpartyno1
        },
        dataType: "jsonp",
        jsonp: 'callback',
        jsonpCallback: 'jsonpCallback',
        timeout: 3000,
        success: function (result) {
            alert(result);
            if (result.QUERYSTATUS == "OOOKK") {
                var order = $(".order");
                $.each(result.Tickets, function (index, item) {
                    outputData(order, item);
                });

            }
        },
        error: function (err) {
            alert("can't get the ordersMsg");
        }


    });

    function outputData(container, item) {
        container.append(
            "<ul class=\"items\">" +
            "<li class=\"name1\">" +
            "<span>" +
            "<input type=\"checkbox\">" +
            "<a href=\"\" class=\"singleId\">" + item.QRCODE + "</a>" +
            "</span>" +
            "</li>" +
            "<li class=\"name3 blue\">" + item.LOGMESSAGE + "</li>" +
            "<li class=\"name2 green\">" + getTicketstatus(parseInt(item.TICKETSTATUS)) + "</li>" +
            "<li class=\"name4\">" + item.BUYNUM + "</li>" +
            "<li class=\"name4\">" + item.CANCELNUM + "</li>" +
            "<li class=\"name4\">" + item.AVAILABLENUM + "</li>" +
            "<li class=\"name4 red\">" + item.VERIFIEDNUM + "</li>" +
            "<li class=\"name5 blue mulChoose\">" +
            "<a href=\"javascript:void(0)\" class=\"editButton\">" + "编辑" + "</a>" +
            "<a href=\"javascript:void(0)\" class=\"againID\">" + "重发码" + "</a>" +
            "</li>" +
            "</ul>"
        );
    }

    function getTicketstatus(i){
        switch (i)
        {
            case 1:return "购票成功";
            case 2:return "验票完毕";
            case 3:return "退票完毕";
            case 4:return "部分退票尚未验票";
            case 5:return "部分退票部分验票";
            case 6:return "部分验票成功";
            case 7:return "更复杂的状态";

        }

    }
    $(".editButton").live("click",function(){
        var ticketID=$(this).parent("li").parent(".items").find(".singleId").html();
        alert(ticketID);
        $(".calcleMenu").css("display","block");
        $(".electName").attr("value",ticketID);

    });

    $(".orderCancle2").live("click",function(){
        $(".calcleMenu").css("display","none");

    });
    $(".orderSure2").live("click",function(){
        alert("cancelTickets");
        var token1="3714861a5b5d78f9bd5d25cb25b371a1357";
        var thirdpartyno1="1234567890127";
        var content2D1="0077188244478668";
        alert("contentID"+content2D1);
        alert($(this).siblings(".ticketMsg2").find(".cancleNum").val());

        var avaliablenum1=parseInt($(this).siblings(".ticketMsg2").find(".cancleNum").val());
        alert("咋不执行呢");
        jQuery.ajax({
            url:"http://www.52uku.net/webservice.asmx/CancelTicketsForDistributor?jsoncallback=?",
            type:"GET",
            contentType: "application/json",
            data:{
                "token":token1,
                "thirdpartyno":thirdpartyno1,
                "Content2D":content2D1,
                "avaliablenum":avaliablenum1
            },
            dataType: "jsonp",
            jsonp:'callback',
            jsonpCallback:'jsonpCallback',
            timeout:3000,
            success: function (result) {
                alert("result.Message"+result.MESSAGE);
                if(result.STATUS=="OOOKK"){
                    alert("退票成功");
                    $(".calcleMenu").css("display","none");
                }
            } ,
            error: function(err){
                alert("退票失败");
            }
        });
    });

    $(".startTime,.endTime").click(function(){
        setday(this);
    });
    $(".searchbyTime").click(function(){
        alert("searchbyID");
        var token1="3714861a5b5d78f9bd5d25cb25b371a1357";
        var distributorID1="224";
        var beginDate1=$(".startTime").val();
        var endDate1=$(".endTime").val();
        var ticketType1="77";
        var distributIDCode1="AEP";
        var mode1="3";
        jQuery.ajax({
            url:"http://www.52uku.net/webservice.asmx/getOrderByTimeRange?jsoncallback=?",
            type:"GET",
            contentType: "application/json",
            data:{
                "token":token1,
                "distributorID":distributorID1,
                "beginDate":beginDate1,
                "endDate":endDate1,
                "ticketType":ticketType1,
                "distributIDCode":distributIDCode1,
                "mode":mode1
            },
            dataType: "jsonp",
            jsonp:'callback',
            jsonpCallback:'jsonpCallback',
            timeout:3000,
            success: function (result) {
                alert("ok吗");
                if(result.STATUS=="OOOKK"){
                    alert("查询成功");
                    var orders = $(".order");
                    $(".items").remove();
                    $.each(result.Tickets, function (index, item) {
                        outputData(orders, item);
                    });
                }
            } ,
            error: function(err){
                alert("查询失败");
            }
        });
    });
    $(".searchbyMultiple").click(function(){
        alert("searchbyMultiple");
        var token1="3714861a5b5d78f9bd5d25cb25b371a1357";
        var querystr1=$(".multiple").val();
        var distributorIDCode1="AEP";
        var code1="2";

        jQuery.ajax({
            url:"http://www.52uku.net/webservice.asmx/getOrderByMulCondition?jsoncallback=?",
            type:"GET",
            contentType: "application/json",
            data:{
                "token":token1,
                "querystr":querystr1,
                "distributorIDCode":distributorIDCode1,
                "code":code1
            },
            dataType: "jsonp",
            jsonp:'callback',
            jsonpCallback:'jsonpCallback',
            timeout:3000,
            success: function (result) {
                alert("ok吗");
                alert(result.MESSAGE);
                if(result.STATUS=="OOOKK"){
                    alert("查询成功");
                    /*
                    var result="<ul class=\"items\"><li class=\"name1\"><span><a href=\"\" class=\"singleId\">1077188244478668</a></span></li><li class=\"name3 blue\">2017-03-07 12:51:18购票(网站) 1张。</li><li class=\"name2 green\">购票成功</li><li class=\"name4\">1</li><li class=\"name4\">0</li><li class=\"name4\">1</li><li class=\"name4 red\">0</li><li class=\"name5 blue\"><a href=\"javascript:void(0)\" class=\"editButton\">编辑</a></li></ul>"+
                               "<ul class=\"items\"><li class=\"name1\"><span><a href=\"\" class=\"singleId\">2077188244478668</a></span></li><li class=\"name3 blue\">2017-03-07 12:51:18购票(网站) 1张。</li><li class=\"name2 green\">购票成功</li><li class=\"name4\">1</li><li class=\"name4\">0</li><li class=\"name4\">1</li><li class=\"name4 red\">0</li><li class=\"name5 blue\"><a href=\"javascript:void(0)\" class=\"editButton\">编辑</a></li></ul>";

                    $(".items").remove();
                    $(".order").append(result);
                    alert("why");
                     */

                    var orders = $(".order");
                    $(".items").remove();
                    $.each(result.Tickets, function (index, item) {
                        outputData(orders, item);
                    });

                }
            } ,
            error: function(err){
                alert("查询失败");
            }
        });
    });

    $(".againID").live("click",function(){
        var token1="3714861a5b5d78f9bd5d25cb25b371a1357";
        var thirdPartyOrderNo1="1234567890127";
        var phoneNumber1="18292864770";
        jQuery.ajax({
            url:"http://www.52uku.net/webservice.asmx/SendOrderEtickets?jsoncallback=?",
            type:"GET",
            contentType: "application/json",
            data:{
                "token":token1,
                "thirdPartyOrderNo":thirdPartyOrderNo1,
                "phoneNumber":phoneNumber1
            },
            dataType: "jsonp",
            jsonp:'callback',
            jsonpCallback:'jsonpCallback',
            timeout:3000,
            success: function (result) {
                if(result.STATUS=="OOOKK"){
                    alert("重发码成功");
                }
            } ,
            error: function(err){
                alert("重发码失败");
            }
        });
    });
    });




