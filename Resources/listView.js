exports.listView = function() {

	var background = Ti.UI.createView({
		top : '45%',
	});
	
	var loading = Ti.UI.createActivityIndicator({
		color : 'black',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 40,
			fontWeight : 'bold'
		},
		message : 'Loading...',
		height : '50%',
		width : '50%'
	});
	

	var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;

	var tableData = [];

	for (var i = 1; i <= 10; i++) {
		var row = Ti.UI.createTableViewRow({
			className : 'forumEvent', // used to improve table performance
			selectedBackgroundColor : 'blue',
			rowIndex : i, // custom property, useful for determining the row during events
			height : 110,

		});

		var imageAvatar = Ti.UI.createImageView({
			image : 'obama.jpg',
			left : '2%',
			width : '20%',
			height : '80%'
		});
		row.add(imageAvatar);

		var labelUserName = Ti.UI.createLabel({
			color : '#576996',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize + 6,
				fontWeight : 'bold'
			},
			text : 'Fred Smith ' + i,
			left : '25%',
			top : 6,
		});
		row.add(labelUserName);

		var labelDetails = Ti.UI.createLabel({
			color : '#222',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize + 2,
				fontWeight : 'normal'
			},
			text : 'Replied to post with id',
			left : '25%',
			top : 44,
		});
		row.add(labelDetails);

		var labelDate = Ti.UI.createLabel({
			color : '#999',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize,
				fontWeight : 'normal'
			},
			text : 'on 25 Nov 2012',
			left : '25%',
			bottom : 10,

		});
		row.add(labelDate);

		row.addEventListener('click', function() {
			loading.show();
			tableView.setTouchEnabled(false);		
			var article = require('article').article();
			
			setTimeout(function() {
				loading.hide();
				article.open();
			}, 2000);

		});

		tableData.push(row);
	}

	var tableView = Ti.UI.createTableView({
		backgroundColor : 'white',
		data : tableData,
		bottom: '15%'
		
	});
	
	var fine = Ti.UI.createImageView({
		image: 'fine.png',
		bottom:0,
		width:'150%',
		height: '15%'
	});
	background.add(tableView);
	background.add(loading);
	background.add(fine);

	return background;

}
