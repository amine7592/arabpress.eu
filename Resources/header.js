exports.header = function() {
	var header = Ti.UI.createView({
		height : '12%',
		backgroundColor : 'black',
		top : 0
	});
	
	
	var logo = Ti.UI.createImageView({
		image: 'arabpress.png',
		width: '50%',
		height: '80%'
	});
	
	var home = Ti.UI.createImageView({
		image: 'home.png',
		left: '2%',
		width: '15%',
		height: '60%'
	});
	
	home.addEventListener('click', function(){
		var homepage = require('frontpage').frontpage();
		homepage.open();
	});
	
	var info = Ti.UI.createImageView({
		image: 'info.png',
		right: '2%',
		width: '15%',
		height: '60%'
	});
	
	info.addEventListener('click', function(){
		var contatti = require('contatti').contatti();
		contatti.open();
	});
	
	
	header.add(logo);
	header.add(home);
	header.add(info);	

	return header
}
