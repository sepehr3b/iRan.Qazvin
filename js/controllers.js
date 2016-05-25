angular.module('starter.controllers', [])

.controller('infoCtrl', function($scope) {
  newmap = L.map('newmap').setView([36.287032, 50.006386], 12);


  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'sepehr3b.036hdd0e',
    accessToken: 'pk.eyJ1Ijoic2VwZWhyM2IiLCJhIjoiY2luenlra3ZqMDB0OXZmbTI0cjZ3bTNrbiJ9.At7ppxkLHjokYhH1N0LoAQ'
  }).addTo(newmap);

})


    .controller('placesCtrl', function($scope, places) {
      $scope.places = places.all();
    })

    .controller('placeDetailCtrl', function($scope, $stateParams, places) {
      $scope.place = places.get($stateParams.placeId);
    })

    .controller('helpCtrl', function($scope) {

    });









angular.module('prr.controllers', [])

    .controller('geoLocationCtrl', function($scope,$window) {
        $window.navigator.geolocation.getCurrentPosition(function(position){
            $scope.$apply(function(){
                $scope.lat = position.coords.latitude;
                $scope.lng = position.coords.longitude;
            })

            console.log(position);
        })
    });

angular.module('alert',[])
    .controller('PopupCtrl',function($scope, $ionicPopup) {

        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title:'About Us',
                templateUrl: 'templates/Pop.html',
                buttons:[{
                    text:'OK',
                    type: 'button-balanced'

                }]
            });
        }});

