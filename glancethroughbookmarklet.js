var injector = function(){
	if ( document.readyState === "complete" ) {
		var jqueryInject = document.createElement('script');
		jqueryInject.setAttribute('src','http://code.jquery.com/jquery-1.10.2.js');
		document.getElementsByTagName('body')[0].appendChild(jqueryInject);
		var bPopupInject = document.createElement('script');
		bPopupInject.setAttribute('src','https://raw.github.com/dinbror/bpopup/master/jquery.bpopup.min.js');
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

		setTimeout(function(){
		document.getElementsByTagName('body')[0].appendChild(articleIframe);

		$('#dialog').bPopup({
			followSpeed: 'fast',
			onClose: function() {$('#iframeDiv').remove()}
			});
		},500)
	}else{
		setTimeout(function()){
			injector();
		},200);
	}
};

injector();