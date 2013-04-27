exports.slider = function() {


	// inizio prima notizia

	var notizia1 = Ti.UI.createView({
		height : '100%',
		width:'100%',
		top : 0,
		});

	var boxNotizia1slide = Ti.UI.createView({
		backgroundColor : 'black',
		opacity : '0.85',
		left : '5%',
		top : '15%',
		height : '85%',
		width : '40%',
		top : '2%',

	});

	var sfondoNotizia1Slide = Ti.UI.createImageView({
		image : 'barackobama.jpg',
		width : '100%',
		height : '100%',
		left : 0
	});

	var testoNotizia1Slide = Ti.UI.createLabel({
		text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus eu dolor suscipit lobortis id at nisl. Fusce risus nulla, convallis mollis dictum in, laoreet at neque. Etiam neque tellus, feugiat id gravida at, placerat nec neque. Sed bibendum pretium arcu sit amet rhoncus. Pellentesque libero felis, molestie eu pretium id, porttitor et lorem. Etiam varius rutrum purus. Maecenas in nisi erat, sit amet vestibulum libero. Nam commodo, sapien id auctor euismod, dolor ligula semper sem, sit amet interdum lectus purus in purus. Ut libero lacus, cursus at pulvinar eget, fringilla et velit. Nulla suscipit varius ultrices. Pellentesque id tellus at nisl varius dapibus ac at metus. Aliquam eleifend tortor sed risus tincidunt tincidunt cursus nibh tristique. Aliquam tincidunt leo quis risus consectetur eget dignissim est ornare. Maecenas molestie diam tristique diam ultrices et varius quam ullamcorper.',
		color : 'white',
		left : '2%',
		top : '15%',
		width : '95%',
		height : '80%'
	});

	var titoloNotizia1Slide = Ti.UI.createLabel({
		text : 'Lorem ipsum',
		color : 'white',
		font : {
			fontWeight : 'bold',
			fontSize : '20'
		},
		left : '2%',
		top : '5%'

	});

	notizia1.add(sfondoNotizia1Slide);
	boxNotizia1slide.add(titoloNotizia1Slide);
	boxNotizia1slide.add(testoNotizia1Slide);
	notizia1.add(boxNotizia1slide);

	//fine prima notizia
	// inizio seconda notizia

	var notizia2 = Ti.UI.createView({
		height : '100%',
		width: '100%',
		top : 0
	});

	var boxNotizia2slide = Ti.UI.createView({
		backgroundColor : 'black',
		opacity : '0.85',
		left : '5%',
		top : '15%',
		height : '85%',
		width : '40%',
		top : '2%',

	});

	var sfondoNotizia2Slide = Ti.UI.createImageView({
		image : 'egitto.jpg',
		width : '100%',
		height : '100%',
		left : 0
	});

	var testoNotizia2Slide = Ti.UI.createLabel({
		text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus eu dolor suscipit lobortis id at nisl. Fusce risus nulla, convallis mollis dictum in, laoreet at neque. Etiam neque tellus, feugiat id gravida at, placerat nec neque. Sed bibendum pretium arcu sit amet rhoncus. Pellentesque libero felis, molestie eu pretium id, porttitor et lorem. Etiam varius rutrum purus. Maecenas in nisi erat, sit amet vestibulum libero. Nam commodo, sapien id auctor euismod, dolor ligula semper sem, sit amet interdum lectus purus in purus. Ut libero lacus, cursus at pulvinar eget, fringilla et velit. Nulla suscipit varius ultrices. Pellentesque id tellus at nisl varius dapibus ac at metus. Aliquam eleifend tortor sed risus tincidunt tincidunt cursus nibh tristique. Aliquam tincidunt leo quis risus consectetur eget dignissim est ornare. Maecenas molestie diam tristique diam ultrices et varius quam ullamcorper.',
		color : 'white',
		left : '2%',
		top : '15%',
		width : '95%',
		height : '80%'
	});

	var titoloNotizia2Slide = Ti.UI.createLabel({
		text : 'Lorem ipsum',
		color : 'white',
		font : {
			fontWeight : 'bold',
			fontSize : '20'
		},
		left : '2%',
		top : '5%'

	});
	
	notizia2.add(sfondoNotizia2Slide);
	boxNotizia2slide.add(titoloNotizia2Slide);
	boxNotizia2slide.add(testoNotizia2Slide);
	notizia2.add(boxNotizia2slide);


	// fine seconda notizia
	//inizio terza notizia
		var notizia3 = Ti.UI.createView({
		height : '100%',
		width: '100%',
		top : 0,
	});

	var boxNotizia3slide = Ti.UI.createView({
		backgroundColor : 'black',
		opacity : '0.85',
		left : '5%',
		top : '15%',
		height : '85%',
		width : '40%',
		top : '2%',

	});

	var sfondoNotizia3Slide = Ti.UI.createImageView({
		image : 'fattouch.jpg',
		width : '100%',
		height : '100%',
		left : 0
	});

	var testoNotizia3Slide = Ti.UI.createLabel({
		text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus eu dolor suscipit lobortis id at nisl. Fusce risus nulla, convallis mollis dictum in, laoreet at neque. Etiam neque tellus, feugiat id gravida at, placerat nec neque. Sed bibendum pretium arcu sit amet rhoncus. Pellentesque libero felis, molestie eu pretium id, porttitor et lorem. Etiam varius rutrum purus. Maecenas in nisi erat, sit amet vestibulum libero. Nam commodo, sapien id auctor euismod, dolor ligula semper sem, sit amet interdum lectus purus in purus. Ut libero lacus, cursus at pulvinar eget, fringilla et velit. Nulla suscipit varius ultrices. Pellentesque id tellus at nisl varius dapibus ac at metus. Aliquam eleifend tortor sed risus tincidunt tincidunt cursus nibh tristique. Aliquam tincidunt leo quis risus consectetur eget dignissim est ornare. Maecenas molestie diam tristique diam ultrices et varius quam ullamcorper.',
		color : 'white',
		left : '2%',
		top : '15%',
		width : '95%',
		height : '80%'
	});

	var titoloNotizia3Slide = Ti.UI.createLabel({
		text : 'Lorem ipsum',
		color : 'white',
		font : {
			fontWeight : 'bold',
			fontSize : '20'
		},
		left : '2%',
		top : '5%'

	});
	notizia3.add(sfondoNotizia3Slide);
	boxNotizia3slide.add(titoloNotizia3Slide);
	boxNotizia3slide.add(testoNotizia3Slide);
	notizia3.add(boxNotizia3slide);

	// fine terza notizia
	
		
	var sliderNotizie = Ti.UI.createScrollableView({
		top : '12%',
		height : '30%',
		views : [notizia1,notizia2,notizia3]
	});
	
	
	
	
	// carosello
	var a = sliderNotizie.getViews();
	var t = 0;
	setInterval(function(e) {
		if (t >= a.length) {
			t = 0;
		}
		sliderNotizie.scrollToView(t);
		t++;

	}, 3300);
	
	
	return sliderNotizie;

}
