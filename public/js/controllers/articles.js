'use strict';

angular.module('mean.articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Global', 'Articles', function ($scope, $stateParams, $location, Global, Articles) {
    $scope.global = Global;

    $scope.create = function() {
        var article = new Articles({
            title: this.title,
            content: this.content
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

    $scope.setUp = function(){
			$scope.speed = 350;
			$scope.i = 0;
			$scope.stop = true;
			$scope.showPlay = true;
		};

		$scope.play = function(){
			$scope.showPlay = !$scope.showPlay;
			console.log($scope.showPlay)
			if(isNaN($scope.speed)||$scope.speed < 1 || $scope.speed > 5000){
				$scope.speed = 350;
			};
			$scope.stop = !$scope.stop;
			autoPlay();
		}

		var autoPlay = function(){
			setInterval(function(){
			if($scope.i ===  $scope.article.content.split(" ").length - 1){
				$scope.stop = true;
			}
			if($scope.stop === !true){
				$scope.$apply(function(){
					$scope.i++;
				});
				};
			},(60000/$scope.speed));
		}

		$scope.findOne = function() {
			Articles.get({
				articleId: $stateParams.articleId
			}, function(article) {
				$scope.article = article;
				$scope.splitArticle = article.content.split(" ")
			});
    };
}]);

