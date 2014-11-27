angular.module('starter.provider', [])

    .provider('couchbase', function () {
        var dbName;
        function Couchbase($http) {
            var url,
                db,
                getConnectionString = function() {
                    return url + db + '/';
                };
            this.get = function (key) {
                return $http.get(getConnectionString() + key);
            };
            this.post = function (key, objectToPut) {
                return $http.post(getConnectionString() + key, objectToPut);
            };
            this.put = function (key, objectToPut) {
                return $http.put(getConnectionString() + key, objectToPut);
            };
            this.delete = function (key) {
                return $http.delete(getConnectionString() + key);
            };
            this.getUrl = function () {
                return url;
            };
            this.setUrl = function (value) {
                url = value;
            };
            this.getDbName = function () {
                return url;
            };
            this.setDbName = function (value) {
                db = value;
            };
            this.createDb = function() {
                return $http.put(url + db);
            }
        };

        this.setDbName = function(value) {
            dbName = value;
        };
        this.$get = ["$window", "$http", '$timeout', function ($window, $http, $timeout) {
            var couchbase = new Couchbase($http);

            $timeout(function() {
                if($window.cblite) {
                    $window.cblite.getURL(
                        function (err, url) {
                            if (err) {
                                couchbase.setUrl(err);
                            } else {
                                couchbase.setUrl(url);
                            }

                            couchbase.setDbName(dbName)
                            couchbase.createDb();
                        });
                } else {
                    couchbase.setUrl('http://localhost:8080/')
                    couchbase.setDbName(dbName)
                    couchbase.createDb();
                }

            }, 100);

            return couchbase;
        }];
    });
