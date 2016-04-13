$(function(){
    var square='<div class="square"></div>'
    $("#holla").click(function(){
        $("#spin").before(square);
    });
	});



$(function(){
    $("#yo").click(function(){
    		document.body.style.background = "red";
    });
});



$(function(){
	$("#ayyy").click(function(){
	$(function() {
            var colors = ["#ffffff","#E8E5EF","#D1CCDF","#BAB2CF","#A399BF","#8C7FB0","#7566A0","#5E4C90","#473380","#301970","#1A0061"];
             
            setInterval(function() { 
                var bodybgarrayno = Math.floor(Math.random() * colors.length);
                var selectedcolor = colors[bodybgarrayno];
                $("body").css("background",selectedcolor);
            }, 100);
        });

	});

});





