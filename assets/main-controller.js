angular.module('app', []);

angular.module('app')
// .value('selectedCount', )
.controller('MainController', function($scope, filterFilter) {

    $scope.storageKey = 'groceries';
    $scope.activeTab = 'list';

    var init = function() {

        var stored = JSON.parse(localStorage.getItem($scope.storageKey));

        if(stored) {
            $scope.products = stored;
        } else {
            $scope.products = [
                {
                    name:"Muz",
                    image:"assets/images/bananas.jpg",
                    count: 0 },
                {
                    name:"Elma",
                    image:"assets/images/apples.jpg",
                    count: 0 },
                {
                    name:"Tarih",
                    image:"assets/images/dates.jpg",
                    count: 0 },
                {
                    name:"Üzum",
                    image:"assets/images/grapes.jpg",
                    count: 0 }
            ];
        }

    };

    init();

    $scope.addCount = function(product, count) {

        if(product.count > 0 || count > 0) {
            product.count = product.count + count;
        }

        $scope.setProducts();

    };

    $scope.addProduct = function(productName) {

        $scope.products.push({
            name: productName,
            image: 'assets/images/placeholder.jpg',
            count: 0
        });

        $scope.setProducts();

    };

    $scope.setProducts = function() {

        localStorage.setItem($scope.storageKey, JSON.stringify($scope.products));
        return $scope.products;

    };

    $scope.emptyProducts = function() {

        angular.forEach($scope.products, (p) =>{
            p.count = 0;
        });

        $scope.setProducts();

    };

    $scope.resetProducts = function() {

        localStorage.removeItem($scope.storageKey);
        init();

    };

});