/**
 * Created by jessica on 12/31/2014.
 */
(function() {


    function brewduinoCtrl($scope, stubData) {
        var makeRimsSettingsVisible = false;
        $scope.message = 'hello world';
        $scope.temp0 = "123.4";
        $scope.temp1 = "23.4";
        $scope.temp2 = "33.4";
        $scope.temp3 = "13.4";
        $scope.rimsSetPoint = 2000;
        $scope.rimsWindowSize = 5000;
        $scope.rimsKp = 5;
        $scope.rimsKi = 0.5;
        $scope.rimsKd = 1;

        $scope.stubData = stubData;

        $scope.showRimsButton = showRimsButton;
        $scope.showRimsSettings = showRimsSettings;
        $scope.rimsSettingVisible = rimsSettingVisible;

        function showRimsButton(thermoObj) {
            if ( angular.isObject(thermoObj) && angular.isDefined(thermoObj.isRIMS) && thermoObj.isRIMS == true)
            {
                return true;
            }
            return false;
        }

        function showRimsSettings () {
            makeRimsSettingsVisible = (makeRimsSettingsVisible == true) ?  false : true;
        }

        function rimsSettingVisible() {
            return makeRimsSettingsVisible;
        }
    };

    angular.module('brewduinoApp')
        .controller('brewduinoCtrl', brewduinoCtrl);
})();