$(function () {

	//幻灯片
	(function myslid(box){
		var box = $(box);
		var img = box.find("img");
		var size = img.size();
		var speed = 5000;

		var crl="";
		var idx = 0;

		var alt = $('<div class="slid_alt"></div>').appendTo(box);
		for(var i=0;i<size;i++){crl += '<b></b>';}
		var crlbox = $('<div class="slid_crl"></div>').appendTo(box);
		crlbox.append(crl);

		function autochan(){
			idx ++;
			if(idx>=size) idx = 0;
			chan();
		}
		function chan(){
			crlbox.find("b").eq(idx).addClass("on").siblings().removeClass("on");
			alt.html(img.eq(idx).attr("alt"));
			img.hide();
			img.eq(idx).fadeIn(1000);
		}

		chan(idx);

		var iCount = setInterval(autochan,speed);

		img.hover(function(){	clearInterval(iCount);
		},function(){	iCount = setInterval(autochan,speed);});

		crlbox.find("b").hover(function(){
			clearInterval(iCount);
			idx = crlbox.find("b").index($(this));
			chan();
		},function(){iCount = setInterval(autochan,speed);});

	})(".banner");


	//尾部特效
	$('.foot_guip ,.foot_add').on('click',function(event){

		var that = $(this);
		that.siblings('li').find('ul').hide();
		$('.mask').show();

		if(that.children('ul').is(":visible") == false){

			that.children('ul').show();
		}else{
			that.children('ul').hide();
			$('.mask').hide();
		}

		event.preventDefault();
	});

	//商务通
	var $guidec_midd = $('.guidec_midd'),
		$guidec_side = $('.guidec_side');

/*************** 暂时注释******************************/
	//setTimeout(function(){$guidec_midd.show();},12000);

	$guidec_midd.find('a').eq(0).on('click',function(event){
		$guidec_midd.hide();
		$guidec_side.show();
		event.preventDefault();
	});
	$guidec_side.find('span').on('click',function(event){
		$guidec_midd.show();
		$guidec_side.hide();
		event.preventDefault();
	});

});