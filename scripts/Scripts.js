
var app = angular
				.module("myModule",[])
				.controller('myController', function($scope){
					var employees = [
						{ name: "Ken", dateOfBirth: new Date("November 23 1990"), gender: "Male", salary: 20000.453 },
						{ name: "Ben", dateOfBirth: new Date("July 2 1980"), gender: "Male", salary: 23300 },
						{ name: "Mary", dateOfBirth: new Date("August 13 1993"), gender: "Female", salary: 54000 },
						{ name: "Samuel", dateOfBirth: new Date("October 2 1989"), gender: "Male", salary: 97000},
						{ name: "James", dateOfBirth: new Date("November 16 1999"), gender: "Male", salary: 61000 }
						
					];
					$scope.employees = employees;
					$scope.sortColumn = "name";

				});
					
