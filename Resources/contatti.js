exports.contatti = function() {

	var win = Ti.UI.createWindow({
		backgroundColor : 'white'
	});

	var header = require('header').header();
	var titolo = Ti.UI.createLabel({
		color:'black',
		text : 'Contatti',
		font : {
			fontWeight : 'bold',
			fontSize : '22'
		},
		left : '45%',
		top : '20%'
	});
	var testo = Ti.UI.createLabel({
		color:'black',
		text : 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',

	});
	win.add(header);
	win.add(titolo);
	win.add(testo);

	return win;
}; 