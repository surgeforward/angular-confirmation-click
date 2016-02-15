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
                        ngConfirmationClick: "&",
                        ngConfirmationCancelClick: "&",                        
                    },
                    link: function (scope, element, attrs) {
                        element.bind('click', function () {
                            var message = attrs.ngConfirmationMessage || "Are you sure ?";
                            var yesButtonText = attrs.ngConfirmationYesText || "Yes";
                            var cancelButtonText = attrs.ngConfirmationCancelText || "Cancel";
                            var backdrop = !!attrs.ngConfirmationBackgrdop;
                            var animation = !!attrs.ngConfirmationAnimation;
                            var size = 'md';                            

                            var modalHtml = 
                                (attrs.ngConfirmationTitle? ('<div class="modal-header"><h3>' + attrs.ngConfirmationTitle + '</h3></div>') : '')
                                + '<div class="modal-body"><h4>' + message + '</h4></div>';
                            modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">' + yesButtonText + '</button><button class="btn btn-warning" ng-click="cancel()">' + cancelButtonText + '</button></div>';

                            var modalInstance = $modal.open({
                                backdrop: true,                                
                                animation: false,
                                size: 'xl',
                                template: modalHtml,
                                controller: ModalInstanceCtrl
                            });

                            modalInstance.result.then(function () {
                                scope.ngConfirmationClick({});
                            }, function () {
                                scope.ngConfirmationCancelClick && scope.ngConfirmationCancelClick(); 
                            });
                        });

                    }
                };
            }
        ]);
})();
