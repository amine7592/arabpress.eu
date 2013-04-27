exports.article = function() {
	var win2 = Ti.UI.createWindow({
		backgroundColor : 'white'
	});

	var header = require('header').header();

	var intestazione = Ti.UI.createView({
		top : '12%',
		width : '80%',
		height : '20%'
	})

	var image = Ti.UI.createImageView({
		image : 'obama.jpg',
		left : 0,
		width : '20%'
	});

	var title = Ti.UI.createLabel({
		text : 'Lorem ipsum, Lorem fsd Ipsum: Lorem Ipsum',
		left : '21%',
		top : '16%',
		
		color : 'black',
		font : {
			fontWeight : 'bold',
			fontSize: '30'
		}

	});

	var subtitle = Ti.UI.createLabel({
		text : 'subtitle subtitle subtitle',
		left : '21%',
		color : 'black',
		font : {
		fontSize: '20',
	},
		top : '60%'
	})

	var boxTestoArticolo = Ti.UI.createScrollView({
		width : '80%',
		top: '32%'
		
	});
	
	var testoArticolo = Ti.UI.createLabel({
	text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus eu dolor suscipit lobortis id at nisl. Fusce risus nulla, convallis mollis dictum in, laoreet at neque. Etiam neque tellus, feugiat id gravida at, placerat nec neque. Sed bibendum pretium arcu sit amet rhoncus. Pellentesque libero felis, molestie eu pretium id, porttitor et lorem. Etiam varius rutrum purus. Maecenas in nisi erat, sit amet vestibulum libero. Nam commodo, sapien id auctor euismod, dolor ligula semper sem, sit amet interdum lectus purus in purus. Ut libero lacus, cursus at pulvinar eget, fringilla et velit. Nulla suscipit varius ultrices. Pellentesque id tellus at nisl varius dapibus ac at metus. Aliquam eleifend tortor sed risus tincidunt tincidunt cursus nibh tristique. Aliquam tincidunt leo quis risus consectetur eget dignissim est ornare. Maecenas molestie diam tristique diam ultrices et varius quam ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus eu dolor suscipit lobortis id at nisl. Fusce risus nulla, convallis mollis dictum in, laoreet at neque. Etiam neque tellus, feugiat id gravida at, placerat nec neque. Sed bibendum pretium arcu sit amet rhoncus. Pellentesque libero felis, molestie eu pretium id, porttitor et lorem. Etiam varius rutrum purus. Maecenas in nisi erat, sit amet vestibulum libero. Nam commodo, sapien id auctor euismod, dolor ligula semper sem, sit amet interdum lectus purus in purus. Ut libero lacus, cursus at pulvinar eget, fringilla et velit. Nulla suscipit varius ultrices. Pellentesque id tellus at nisl varius dapibus ac at metus. Aliquam eleifend tortor sed risus tincidunt tincidunt cursus nibh tristique. Aliquam tincidunt leo quis risus consectetur eget dignissim est ornare. Maecenas molestie diam tristique diam ultrices et varius quam ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus eu dolor suscipit lobortis id at nisl. Fusce risus nulla, convallis mollis dictum in, laoreet at neque. Etiam neque tellus, feugiat id gravida at, placerat nec neque. Sed bibendum pretium arcu sit amet rhoncus. Pellentesque libero felis, molestie eu pretium id, porttitor et lorem. Etiam varius rutrum purus. Maecenas in nisi erat, sit amet vestibulum libero. Nam commodo, sapien id auctor euismod, dolor ligula semper sem, sit amet interdum lectus purus in purus. Ut libero lacus, cursus at pulvinar eget, fringilla et velit. Nulla suscipit varius ultrices. Pellentesque id tellus at nisl varius dapibus ac at metus. Aliquam eleifend tortor sed risus tincidunt tincidunt cursus nibh tristique. Aliquam tincidunt leo quis risus consectetur eget dignissim est ornare. Maecenas molestie diam tristique diam ultrices et varius quam ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus eu dolor suscipit lobortis id at nisl. Fusce risus nulla, convallis mollis dictum in, laoreet at neque. Etiam neque tellus, feugiat id gravida at, placerat nec neque. Sed bibendum pretium arcu sit amet rhoncus. Pellentesque libero felis, molestie eu pretium id, porttitor et lorem. Etiam varius rutrum purus. Maecenas in nisi erat, sit amet vestibulum libero. Nam commodo, sapien id auctor euismod, dolor ligula semper sem, sit amet interdum lectus purus in purus. Ut libero lacus, cursus at pulvinar eget, fringilla et velit. Nulla suscipit varius ultrices. Pellentesque id tellus at nisl varius dapibus ac at metus. Aliquam eleifend tortor sed risus tincidunt tincidunt cursus nibh tristique. Aliquam tincidunt leo quis risus consectetur eget dignissim est ornare. Maecenas molestie diam tristique diam ultrices et varius quam ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus eu dolor suscipit lobortis id at nisl. Fusce risus nulla, convallis mollis dictum in, laoreet at neque. Etiam neque tellus, feugiat id gravida at, placerat nec neque. Sed bibendum pretium arcu sit amet rhoncus. Pellentesque libero felis, molestie eu pretium id, porttitor et lorem. Etiam varius rutrum purus. Maecenas in nisi erat, sit amet vestibulum libero. Nam commodo, sapien id auctor euismod, dolor ligula semper sem, sit amet interdum lectus purus in purus. Ut libero lacus, cursus at pulvinar eget, fringilla et velit. Nulla suscipit varius ultrices. Pellentesque id tellus at nisl varius dapibus ac at metus. Aliquam eleifend tortor sed risus tincidunt tincidunt cursus nibh tristique. Aliquam tincidunt leo quis risus consectetur eget dignissim est ornare. Maecenas molestie diam tristique diam ultrices et varius quam ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus eu dolor suscipit lobortis id at nisl. Fusce risus nulla, convallis mollis dictum in, laoreet at neque. Etiam neque tellus, feugiat id gravida at, placerat nec neque. Sed bibendum pretium arcu sit amet rhoncus. Pellentesque libero felis, molestie eu pretium id, porttitor et lorem. Etiam varius rutrum purus. Maecenas in nisi erat, sit amet vestibulum libero. Nam commodo, sapien id auctor euismod, dolor ligula semper sem, sit amet interdum lectus purus in purus. Ut libero lacus, cursus at pulvinar eget, fringilla et velit. Nulla suscipit varius ultrices. Pellentesque id tellus at nisl varius dapibus ac at metus. Aliquam eleifend tortor sed risus tincidunt tincidunt cursus nibh tristique. Aliquam tincidunt leo quis risus consectetur eget dignissim est ornare. Maecenas molestie diam tristique diam ultrices et varius quam ullamcorper.',
	color: 'black',
	font : {
		fontSize: '23',
	},
	width: '100%',

	});
	

	intestazione.add(image);
	intestazione.add(title);
	intestazione.add(subtitle);

	
	win2.add(header);
	win2.add(intestazione);
	boxTestoArticolo.add(testoArticolo);
	win2.add(boxTestoArticolo);

	return win2;

}
