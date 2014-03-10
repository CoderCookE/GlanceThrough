var jqueryInject = document.createElement('script');
				jqueryInject.setAttribute('src','http://code.jquery.com/jquery-1.10.2.js');
				document.getElementsByTagName('body')[0].appendChild(jqueryInject);
				var bPopupInject = document.createElement('script');
				bPopupInject.setAttribute('src','https://raw.github.com/dinbror/bpopup/master/jquery.bpopup.min.js');
				document.getElementsByTagName('body')[0].appendChild(bPopupInject);

				var foundArticle = ('http://localhost:3000/articles/bookmarklet?url='+ encodeURIComponent(window.location));

				var createArticle = document.createElement('img');
				createArticle.setAttribute('src', foundArticle);
				document.getElementsByTagName('body')[0].appendChild(createArticle);
				createArticle.remove();

				var articleIframe = document.createElement('iframe');
				articleIframe.setAttribute('src', 'http://localhost:3000/#!/testpage');

				articleIframe.setAttribute('id', 'dialog');
				articleIframe.setAttribute('width', '80%');
				articleIframe.setAttribute('height', '350px');

				var iframeDiv = document.createElement('div');
				iframeDiv.setAttribute('id', 'iframeDiv')
				document.getElementsByTagName('body')[0].appendChild(iframeDiv);

				setTimeout(function(){
					document.getElementsById('iframeDiv')[0].appendChild(articleIframe);

					$('#dialog').bPopup({
						followSpeed: 'fast',
						onClose: function() {$('#dialog').remove()}
					});
				},400)