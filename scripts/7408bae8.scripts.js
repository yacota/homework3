"use strict";var auction;!function(a){angular.module("auction",["ngRoute"]).config(["$routeProvider",function(b){var c=function(a){return a+" | Auction"};b.when("/",{templateUrl:"views/home.html",controller:"HomeController",title:c("Home")}).when("/search",{templateUrl:"views/search.html",controller:"SearchController",title:c("Search")}).when("/product/search/:id",{templateUrl:"views/product.html",controller:"ProductController",title:c("Product"),resolve:a.controller.ProductController.resolve}).otherwise({redirectTo:"/"})}]).run(["$rootScope",function(a){a.$on("$routeChangeStart",function(b,c){a.title=c.title})}])}(auction||(auction={}));var auction;!function(a){!function(a){var b=function(){function a(a,b){this.$scope=a,this.service=b,this.service.getFeatured().then(function(b){return a.model={heading:b.heading,items:b.items}})}return a.$inject=["$scope","ProductService"],a}();a.HomeController=b,angular.module("auction").controller("HomeController",b)}(a.controller||(a.controller={}));a.controller}(auction||(auction={}));var auction;!function(a){!function(a){var b=function(){function a(a,b){this.$scope=a,this.service=b,this.service.getSearch().then(function(b){return a.model={heading:b.heading,items:b.items}})}return a.$inject=["$scope","ProductService"],a}();a.SearchController=b,angular.module("auction").controller("SearchController",b)}(a.controller||(a.controller={}));a.controller}(auction||(auction={}));var auction;!function(a){!function(a){var b=function(){function a(a,b){this.$scope=a,this.product=b,this.isSearchFormShown=!1,a.model={product:b,isSearchFormShown:this.isSearchFormShown}}return a.$inject=["$scope","product","ProductService","$route"],a.resolve={product:["ProductService","$route",function(a,b){return a.getProductById(b.current.params.id)}]},a}();a.ProductController=b,angular.module("auction").controller("ProductController",b)}(a.controller||(a.controller={}));a.controller}(auction||(auction={}));var auction;!function(a){!function(){function a(){return{scope:!1,restrict:"E",templateUrl:"views/partial/navbar.html"}}angular.module("auction").directive("auctionNavbar",a)}(a.directive||(a.directive={}));a.directive}(auction||(auction={}));var auction;!function(a){!function(){function a(){return{scope:!1,restrict:"E",templateUrl:"views/partial/footer.html"}}angular.module("auction").directive("auctionFooter",a)}(a.directive||(a.directive={}));a.directive}(auction||(auction={}));var auction;!function(a){!function(){function a(){return{scope:!0,restrict:"E",templateUrl:"views/partial/searchform.html"}}angular.module("auction").directive("auctionSearch",a)}(a.directive||(a.directive={}));a.directive}(auction||(auction={}));var auction;!function(a){!function(a){var b=function(){function a(){}return a}();a.ProductListModel=b}(a.model||(a.model={}));a.model}(auction||(auction={}));var auction;!function(a){!function(a){var b=function(){function a(){}return a}();a.ProductModel=b}(a.model||(a.model={}));a.model}(auction||(auction={}));var auction;!function(a){!function(a){var b=function(){function a(a,b){this.$http=a,this.$q=b}return a.prototype.getFeatured=function(){return this.getData("data/featured.json")},a.prototype.getSearch=function(){return this.getData("data/search.json")},a.prototype.getProductById=function(a){return this.getDataById("data/"+a+".json")},a.prototype.getData=function(a){console.log("ProductService retrieving->"+a);var b=this.$q.defer();return this.$http.get(a).success(function(a){return b.resolve(a)}).error(function(){return b.reject()}),b.promise},a.prototype.getDataById=function(a){console.log("ProductService retrieving by Id->"+a);var b=this.$q.defer();return this.$http.get(a).success(function(a){return b.resolve(a)}).error(function(){return b.reject()}),b.promise},a.$inject=["$http","$q"],a}();a.ProductService=b,angular.module("auction").service("ProductService",b)}(a.service||(a.service={}));a.service}(auction||(auction={}));