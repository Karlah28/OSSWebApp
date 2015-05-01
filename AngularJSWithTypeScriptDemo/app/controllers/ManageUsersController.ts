/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />

module ossApp.controllers {
    export class ManageUsersController {
        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject = [
            "ossApp.Services.NavbarService",
            'ossApp.Services.HttpService',
            '$scope',
            '$localStorage'
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            public $scope,
            $localStorage
            ) {
            var baseUrl = "http://localhost:51941/api";
            //make call on page load
            angular.element(document).ready(function () {
                var getUsersUrl = "/Account/ViewUnregisteredUsers";
                HttpService.serverGet(baseUrl + getUsersUrl,(results) => {
                    $localStorage.potentialUsers = results;
                    $scope.setProspects();
                });
            });

            var prospects = $localStorage.potentialUsers;

            $scope.title = "User Management";
            $scope.prospects = new Array<ossApp.Interfaces.ProspectUser>();
            $scope.TempProspects = new Array<ossApp.Interfaces.ProspectUser>();

            $scope.setProspects = () => {
                for (var i = 0; i < $localStorage.potentialUsers.length; i++) {
                    $scope.prospects.push($localStorage.potentialUsers[i]);
                }
            }

            $scope.tempIndex = new Array();

            $scope.addTemp = (value: any) => {
                //check if item is repeated
                if ($scope.tempIndex.length > 0) {
                    //if element doesn't exist
                    if ($scope.tempIndex.indexOf(value) === -1) {
                        $scope.tempIndex.push(value);
                    }
                }
                else {
                    $scope.tempIndex.push(value);
                }
            };

            $scope.removeTemp = (value: any) => {
                //don't remove index if array is empty
                if ($scope.tempIndex.length > 0) {
                    //if element exist
                    var index = $scope.tempIndex.indexOf(value);
                    if (index !== -1) {
                        //remove element
                        $scope.tempIndex.splice(index, 1);
                    }
                }
            };

            //send approved users
            $scope.approve = () => {
                //clear temp array
                var x = $scope.tempIndex;
                var methodUrl = "/Account/ApproveUser";
                
                for (var i = 0; i < $scope.tempIndex.length; i++){
                    var index = $scope.tempIndex[i];
                    var email = prospects[index].Email;                    
                    console.log(email);
                    HttpService.serverPost(baseUrl + methodUrl, email ,(results, status) => {        
                        var x = results;
                        console.log('status->', status);
                    });

                }



                //HttpService.serverPost(baseUrl + methodUrl, $scope.TempProspects.Email,(results) => {
                //    var x = results;
                //});
            };

            //send denied users
            $scope.deny = () => {
                //clear temp array
                var x = $scope.TempProspects;
                var methodUrl = "/Account/something";
                HttpService.serverPost(baseUrl + methodUrl, $scope.TempProspects,(results) => {
                    var x = results;
                });
            };
        }
    }
    angular.module("ossApp").controller("ossApp.controllers.ManageUsersController", ManageUsersController);
} 