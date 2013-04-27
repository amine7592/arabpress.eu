exports.frontpage = function() {

	var win = Ti.UI.createWindow({
		backgroundColor : 'white',
		
	});
	var header = require('header').header();
	
	//var footer = require('footer').footer();
	
	var sliderNotizie = require('slider').slider();
	
	var listViewNotizie = require('listView').listView();
	
	
	win.add(header);
	win.add(sliderNotizie);
	win.add(listViewNotizie);
	
	

/*	var data1 = Ti.UI.createTableViewRow({
		title : 'Lorem ipsum',
		//height : 40
	});
	
	
	var data2 = Ti.UI.createTableViewRow({
		title : 'lorem ipsum 2',
		//height : 40
	});
	var data3 = Ti.UI.createTableViewRow({
		title : 'lorem ipsum 3',
		//height : 40
	});
	
	data1.addEventListener('click',function(){
		var article = require('article').article();
		article.open();
	});
	/*var view = Ti.UI.createView({
	 height:100,
	 backgroundColor:'green'
	 });
	 data3.add(view);

	var listaNotizie = Ti.UI.createTableView({
		top : '47%',
		rowHeight : 40,
		data : [data1, data2, data3]
	});*/

	//win.add(listaNotizie);
	

	return win;

}

