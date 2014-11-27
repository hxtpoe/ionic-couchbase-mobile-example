angular.module('starter.controllers', [])
    .controller('DashCtrl', function ($scope, couchbase) {
        $scope.user = {
        };

        $scope.save = function () {
            couchbase.put($scope.user.name, $scope.user);
        }
    })

    .controller('CarsCtrl', function ($scope, couchbase) {
        couchbase.get('_all_docs').success(
            function (data) {
                $scope.test = angular.fromJson(data);
            }
        );
    })

    .controller('CarDetailCtrl', function ($scope, $stateParams, couchbase) {
        couchbase.get($stateParams.carId).success(function (data) {
            $scope.user = angular.fromJson(data);
        });
    })

    .controller('SettingsCtrl', function ($scope, couchbase) {
        $scope.db = couchbase;
    });
