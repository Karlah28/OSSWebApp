//module ossApp.controllers {
//    export class ManageUsersController {
//        NavbarService: ossApp.Interfaces.INavbarService;
//        static $inject = [
//            "ossApp.Services.NavbarService",
//            'ossApp.Services.HttpService',
//            '$scope',
//            '$localStorage'
//        ];
//        constructor(
//            NavbarService: ossApp.Interfaces.INavbarService,
//            HttpService: ossApp.Interfaces.HttpService,
//            public $scope,
//            $localStorage
//            ) {
//            var baseUrl = "http://localhost:51941/api";
//            //make call on page load
//            angular.element(document).ready(function () {
//                var getUsersUrl = "/Account/ViewUnregisteredUsers";
//                HttpService.serverGet(baseUrl + getUsersUrl,(results) => {
//                    $localStorage.potentialUsers = results;
//                    $scope.setProspects();
//                });
//            });

//            var prospects = $localStorage.potentialUsers;

//            $scope.title = "User Management";
//            $scope.prospects = new Array<ossApp.Interfaces.ProspectUser>();
//            $scope.TempProspects = new Array<ossApp.Interfaces.ProspectUser>();

//            $scope.setProspects = () => {
//                for (var i = 0; i < $localStorage.potentialUsers.length; i++) {
//                    $scope.prospects.push($localStorage.potentialUsers[i]);
//                }
//            }
            
//            //$scope.prospects.push(
//            //    {
//            //        FirstName: "Karla",
//            //        LastName: "Hernandez",
//            //        Email: "karla.hernandez@mavs.uta.edu",
//            //        PhoneNumber: "817456623"
//            //    },
//            //    {
//            //        FirstName: "Robert",
//            //        LastName: "Calvert",
//            //        Email: "sample@mavs.uta.edu",
//            //        PhoneNumber: "817456623"
//            //    },
//            //    {
//            //        FirstName: "Caleb",
//            //        LastName: "Goodman",
//            //        Email: "caleb@gmail.com",
//            //        PhoneNumber: "554522150"
//            //    });

//            $scope.addTemp = (prospect: any) => {
//                $scope.TempProspects.push(prospect);
//            };

//            //send approved users
//            $scope.approve = () => {
//                //clear temp array
//                var x = $scope.TempProspects;
//                var methodUrl = "/Account/ViewUnregisteredUsers";
//                HttpService.serverPost(baseUrl + methodUrl, $scope.TempProspects,(results) => {
//                    var x = results;
//                });
//            };

//            //send denied users
//            $scope.deny = () => {
//                //clear temp array
//                var x = $scope.TempProspects;
//                var methodUrl = "/Account/something";
//                HttpService.serverPost(baseUrl + methodUrl, $scope.TempProspects,(results) => {
//                    var x = results;
//                });
//            };
//        }
//    }
//    angular.module("ossApp").controller("ossApp.controllers.ManageUsersController", ManageUsersController);
//} 
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
            
            //$scope.prospects.push(
            //    {
            //        FirstName: "Karla",
            //        LastName: "Hernandez",
            //        Email: "karla.hernandez@mavs.uta.edu",
            //        PhoneNumber: "817456623"
            //    },
            //    {
            //        FirstName: "Robert",
            //        LastName: "Calvert",
            //        Email: "sample@mavs.uta.edu",
            //        PhoneNumber: "817456623"
            //    },
            //    {
            //        FirstName: "Caleb",
            //        LastName: "Goodman",
            //        Email: "caleb@gmail.com",
            //        PhoneNumber: "554522150"
            //    });

            $scope.addTemp = (prospect: any) => {
                $scope.TempProspects.push(prospect);
            };

            //send approved users
            $scope.approve = () => {
                //clear temp array
                var x = $scope.TempProspects;
                var methodUrl = "/Account/ViewUnregisteredUsers";
                HttpService.serverPost(baseUrl + methodUrl, $scope.TempProspects,(results) => {
                    var x = results;
                });
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