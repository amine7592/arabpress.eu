exports.footer = function() {
	var footer = Ti.UI.createView({
		backgroundColor : 'black',
		bottom : 0,
		height : '8%'
	});

	var home = Ti.UI.createView({
		backgroundColor : 'black',
		left : 0,
		height:'100%',
		width: '50%'
		
	});

	var homeIcon = Ti.UI.createView({
		backgroundImage : 'home.png',
		height:'85%',
		width: '40%'
		
	});

	var contacts = Ti.UI.createView({
		backgroundColor : 'black',
		right : 0,
		height:'100%',
		width: '50%'
		

	});

	var contactIcon = Ti.UI.createView({
		backgroundImage : 'contacts.png',
		height:'85%',
		width: '40%'
	});

	home.add(homeIcon);
	contacts.add(contactIcon);
	footer.add(contacts);
	footer.add(home);
	
	home.addEventListener('click',function(){
		var home = require('frontpage').frontpage();
		home.open();
	});
	
	
	return footer
}
