'use strict';

angular.module('mean.articles').controller('ArticlesController', ['$http','$scope', '$stateParams', '$location', 'Global', 'Articles',function ($http, $scope, $stateParams, $location, Global, Articles) {
    $scope.global = Global;
    $scope.$on('$viewContentLoaded', function(event) {
   		$window._gaq.push(['_trackPageview', $location.path()]);
  	});

    $scope.create = function() {
        var article = new Articles({
            title: this.title,
            content: this.content.replace(/\n/g,"\n\n")
        });
        article.$save(function(response) {
            $location.path('articles/' + response._id);
        });

        this.title = '';
        this.content = '';
    };

    $scope.remove = function(article) {
        if (article) {
            article.$remove();

            for (var i in $scope.articles) {
                if ($scope.articles[i] === article) {
                    $scope.articles.splice(i, 1);
                }
            }
        }
        else {
            $scope.article.$remove();
            $location.path('articles');
        }
    };

    $scope.update = function() {
        var article = $scope.article;
        if (!article.updated) {
            article.updated = [];
        }
        article.updated.push(new Date().getTime());

        article.$update(function() {
            $location.path('articles/' + article._id);
        });
    };

    $scope.find = function() {
    	Articles.query(function(articles) {
				$scope.articles = articles;
			});
    };

   $scope.delayFind = function() {
    	setTimeout(function(){
    		Articles.query(function(articles) {
					$scope.articles = articles;
				});
			},3700);
    };

    $scope.setUp = function(){
			$scope.speed = 350;
			$scope.i = 0;
			$scope.stop = true;
			$scope.showPlay = true;
		};

		$scope.step = function(arg){
			if(arg === "prev"){
				$scope.stop = true;
				$scope.showPlay = true;
				if($scope.i !== 0){
					$scope.i--;
				}
			}else if(arg === "prevSent"){
				$scope.stop = true;
				$scope.showPlay = true;
				if($scope.i !== 0){
					$scope.i--;
					while($scope.splitArticle[$scope.i].indexOf(".")==-1 && $scope.i !== 0 ){
						$scope.i--;
					}
				}
			}else{
				$scope.stop = true;
				$scope.showPlay = true;
				if($scope.i !== $scope.splitArticle.length-1){
					$scope.i++;
				}
			}
		}

		$scope.play = function(){
			$scope.showPlay = !$scope.showPlay;
		//	console.log($scope.showPlay)
			if(isNaN($scope.speed)||$scope.speed < 1 || $scope.speed > 5000){
				$scope.speed = 350;
			};
			$scope.stop = !$scope.stop;
			autoPlay();
		}

		var autoPlay = function(){
			if(!$scope.stop){
				setTimeout(function(){
					if($scope.i ===  $scope.splitArticle.length-1){
						$scope.stop = true;
						$scope.showPlay = true;
						setTimeout(function(){
						$scope.$apply(function(){
							$scope.i = 0;
						});
					},2000);
					}
					if(!$scope.stop){
						$scope.$apply(function(){
							$scope.i++;
						});
					};
					autoPlay();
				},(60000/$scope.speed));
			}
		}

		$scope.getByUrl = function(){
			if($scope.urlToCheck !== $('#urlToCheck').val()){
				$scope.urlToCheck = $('#urlToCheck').val();
			}

			$http.get('/articles/text?url=' + $scope.urlToCheck)
				.success(function(response) {
					$scope.title = response.title;
					$scope.content = response.text.replace(/\\t/g,' ').replace(/\\n/g,' ').replace(/\\/g,' ').replace(/\s{2,}/g,' ');
					$scope.urlCheck = false;
				})
				.error(function(){
					$scope.urlCheck = true;
				});
		}
		$scope.getSummary = function(){
			$http.get('/articles/text?url=' + $scope.urlToCheck)
				.success(function(response) {
					$scope.title = "SUMMARIZED: " + response.title;
					var arrayOfWords = [];

					for(var i = 0; i<(3*$scope.summaryLength);i++){
						arrayOfWords.push(response.keywords[i].text)
					}
					var fullArticleArray = response.text.replace(/\\t/g,' ').replace(/\\n/g,' ').replace(/\\/g,' ').replace(/\s{2,}/g,' ').split(".");
					var summarizedArticle = [];
					for(var sentence in fullArticleArray){
						for(var word in arrayOfWords){
							if(fullArticleArray[sentence].toString().indexOf(arrayOfWords[word].toString()) !== -1){
								summarizedArticle.push(fullArticleArray[sentence]);
								break;
							}
						}
					}

					$scope.content = summarizedArticle.join(".");
					$scope.urlCheck = false;
				})
				.error(function(){
					$scope.urlCheck = true;
				});
		}
		$scope.findOne = function() {
			Articles.get({
				articleId: $stateParams.articleId
			}, function(article) {
				$scope.article = article;
				$scope.splitArticle = article.content.replace(/-/g," ").replace(/\s/g, "  ").replace(/\n/g," ").replace(/\s{2,}/g," ").split(" ");
			});
    };
}]);

