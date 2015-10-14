(function () {
    'use strict';
    angular.module('app')
        .directive('ngConfirmationClick', ['$modal',
            function ($modal) {

                var ModalInstanceCtrl = function ($scope, $modalInstance) {
                    $scope.ok = function () {
                        $modalInstance.close();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                };

                return {
                    restrict: 'A',
                    scope: {
                        ngConfirmationClick: "&"
                    },
                    link: function (scope, element, attrs) {
                        element.bind('click', function () {
                            var message = attrs.ngConfirmationMessage || "Are you sure ?";

                            var modalHtml = '<div class="modal-body"><h4>' + message + '</h4></div>';
                            modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">Yes</button><button class="btn btn-warning" ng-click="cancel()">Cancel</button></div>';

                            var modalInstance = $modal.open({
                                template: modalHtml,
                                controller: ModalInstanceCtrl
                            });

                            modalInstance.result.then(function () {
                                scope.ngConfirmationClick({});
                            }, function () {
                                /*Modal dismissed*/
                            });
                        });

                    }
                };
            }
        ]);
})();
