angular.module('unchatbar-user')
    .config(['BrokerProvider','LOCALSTORAGE',
        function (BrokerProvider, LOCALSTORAGE) {
            BrokerProvider.setHost('unchatbar-server.herokuapp.com');
        }]);