	var jqueryInject = document.createElement('script');
	jqueryInject.setAttribute('src','http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js');
	document.getElementsByTagName('body')[0].appendChild(jqueryInject);
	var bPopupInject = document.createElement('script');
	bPopupInject.setAttribute('src','https://rawgithub.com/dinbror/bpopup/master/jquery.bpopup.min.js');
	document.getElementsByTagName('body')[0].appendChild(bPopupInject);

	var foundArticle = ('http://glancethrough.info/articles/bookmarklet?url='+ encodeURIComponent(window.location));

	var createArticle = document.createElement('img');
	createArticle.setAttribute('src', foundArticle);
	document.getElementsByTagName('body')[0].appendChild(createArticle);
	createArticle.remove();

	var articleIframe = document.createElement('iframe');
	articleIframe.setAttribute('src', 'http://www.glancethrough.info/#!/testpage');

	articleIframe.setAttribute('id', 'dialog');
	articleIframe.setAttribute('width', '80%');
	articleIframe.setAttribute('height', '350px');
	var openPopup = function(){
		console.log("Running open popup");
		if(typeof $("#dialog").bPopup !== "undefined") {
	document.getElementsByTagName('body')[0].appendChild(articleIframe);
			console.log("bPopup defined, injecting");
	$('#dialog').bPopup({
		followSpeed: 'fast',
		onClose: function() {$('#iframeDiv').remove()}
		});
	  } else {
	  	console.log("bPopup undefined, waiting 400");
	  	setTimeout(openPopup, 400);
	  }
	}
	setTimeout(openPopup,400)
