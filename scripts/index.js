/*sign in*/
var top_2_1=document.querySelector('#top_2_1');
	top_2_1.addEventListener('mouseover',function(){
		top_2_1.style.backgroundColor='#8f3232'
	})
	top_2_1.addEventListener('mouseout',function(){
		top_2_1.style.backgroundColor='#2c2c2c'
	})


/*sign up*/
var top_2_2=document.querySelector('#top_2_2');
	top_2_2.addEventListener('mouseover',function(){
		top_2_2.style.backgroundColor='#8f3232'
	})
	top_2_2.addEventListener('mouseout',function(){
		top_2_2.style.backgroundColor='#2c2c2c'
	})


/*twitter*/
var twitter=document.querySelector('#twitter');
	twitter.addEventListener('mouseover',function(){
		twitter.style.backgroundColor='#8f3232'
	})
	twitter.addEventListener('mouseout',function(){
		twitter.style.backgroundColor='#2c2c2c'
	})


/*facebook*/
var facebook=document.querySelector('#facebook');
	facebook.addEventListener('mouseover',function(){
		facebook.style.backgroundColor='#8f3232'
	})
	facebook.addEventListener('mouseout',function(){
		facebook.style.backgroundColor='#2c2c2c'
	})


/*skype*/
var skype=document.querySelector('#skype');
	skype.addEventListener('mouseover',function(){
		skype.style.backgroundColor='#8f3232'
	})
	skype.addEventListener('mouseout',function(){
		skype.style.backgroundColor='#2c2c2c'
	})


/*wifi*/
var wifi=document.querySelector('#wifi');
	wifi.addEventListener('mouseover',function(){
		wifi.style.backgroundColor='#8f3232'
	})
	wifi.addEventListener('mouseout',function(){
		wifi.style.backgroundColor='#2c2c2c'
	})


/*前进后退*/
document.querySelector('#bgp').addEventListener('mouseover',function(){
	document.querySelector('#last').style.visibility='visible'
})
document.querySelector('#bgp').addEventListener('mouseout',function(){
	document.querySelector('#last').style.visibility='hidden'
})
document.querySelector('#bgp').addEventListener('mouseover',function(){
	document.querySelector('#next').style.visibility='visible'
})
document.querySelector('#bgp').addEventListener('mouseout',function(){
	document.querySelector('#next').style.visibility='hidden'
})


/*切换*/
document.querySelector('#switch_1').addEventListener('mouseover',function(){
	document.querySelector('#bgp').style.backgroundImage='url(images/bgp_1.jpg)';
	document.querySelector('#switch_1').style.backgroundColor='#fff';
})
document.querySelector('#switch_1').addEventListener('mouseout',function(){
	document.querySelector('#switch_1').style.backgroundColor='transparent'
})

document.querySelector('#switch_2').addEventListener('mouseover',function(){
	document.querySelector('#bgp').style.backgroundImage='url(images/bgp_2.jpg)';
	document.querySelector('#switch_2').style.backgroundColor='#fff';
})
document.querySelector('#switch_2').addEventListener('mouseout',function(){
	document.querySelector('#switch_2').style.backgroundColor='transparent'
})

document.querySelector('#switch_3').addEventListener('mouseover',function(){
	document.querySelector('#bgp').style.backgroundImage='url(images/bgp_3.jpg)';
	document.querySelector('#switch_3').style.backgroundColor='#fff';
})
document.querySelector('#switch_3').addEventListener('mouseout',function(){
	document.querySelector('#switch_3').style.backgroundColor='transparent'
})