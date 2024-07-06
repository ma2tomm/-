

// トップページスライドショー
$('.mainimg-slick').slick({
	autoplay: true,
	dots: false,				//丸いページナビボタンを表示
	arrows: false,		
    fade: true,    	//左右の矢印
	autoplaySpeed: 2000,	//切り替えのスピード
});

$('.sabaki-slick').slick({
	autoplay: true,
	dots: false,				//丸いページナビボタンを表示
	arrows: false,		
    fade: true,    	//左右の矢印
	autoplaySpeed: 1000,	//切り替えのスピード
});

$('.group-slick').slick({
	autoplay: true,
	dots: false,				//丸いページナビボタンを表示
	arrows: false,		
    fade: true,    	//左右の矢印
	autoplaySpeed: 2000,	//切り替えのスピード
});


$(function(){
    setInterval(function(){

        setInterval(function(){
        	$("as2").adClass(seek);
			$("as2").removeClass(hide);
			$("as1,as3,as4,as5").removeClass(seek);
			$("as1,as3,as4,as5").adClass(hide);
		},1000);
		setInterval(function(){
			$("as3").adClass(seek);
			$("as3").removeClass(hide);
			$("as1,as2,as4,as5").removeClass(seek);
			$("as1,as2,as4,as5").adClass(hide);
		},2000);
		setInterval(function(){
			$("as4").adClass(seek);
			$("as4").removeClass(hide);
			$("as1,as3,as2,as5").removeClass(seek);
			$("as1,as3,as2,as5").adClass(hide);
		},3000);
		setInterval(function(){
			$("as5").adClass(seek);
			$("as5").removeClass(hide);
			$("as1,as3,as4,as2").removeClass(seek);
			$("as1,as3,as4,as2").adClass(hide);
		},4000);


    },5000);
});





