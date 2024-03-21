// carousel.js

angular.module('carouselApp', [])
  .controller('CarouselController', function($scope) {
    $scope.showPopup = false;

    $scope.showPlaylistPopup = function() {
      $scope.showPopup = true;
    };

    $scope.hidePopup = function() {
      $scope.showPopup = false;
    };

    $scope.addToPlaylist = function() {
      alert("Song added to playlist");
    };

    $scope.startCarousel = function() {
      $scope.currentSlide = 0;
      $scope.showSlide($scope.currentSlide);
      document.getElementById('browse-section').style.display = 'none';
    };

    $scope.currentSlide = 0;
    $scope.totalSlides = document.querySelectorAll('.carousel img').length;
    $scope.songs = [
      { image: "p1.jpg", audio: "song1.mp3", name: "Punjabi Wedding Song" },
      { image: "p2.jpg", audio: "song2.mp3", name: "London Thumakda" },
      { image: "p3.jpg", audio: "song3.mp3", name: "Gallan Goodiyaan" },
      { image: "p4.jpg", audio: "song4.mp3", name: "Din Shagna Da" }
    ];

    $scope.showSlide = function(n) {
      var slides = document.querySelectorAll('.carousel img');
      var audios = document.querySelectorAll('audio');
      var songName = document.getElementById('song-name');

      if (n >= $scope.totalSlides) {
        $scope.currentSlide = 0;
      } else if (n < 0) {
        $scope.currentSlide = $scope.totalSlides - 1;
      } else {
        $scope.currentSlide = n;
      }

      for (var i = 0; i < $scope.totalSlides; i++) {
        slides[i].style.display = 'none';
        audios[i].pause();
      }

      slides[$scope.currentSlide].style.display = 'block';
      audios[$scope.currentSlide].currentTime = 0;
      audios[$scope.currentSlide].play();
      songName.textContent = $scope.songs[$scope.currentSlide].name;
    };

    $scope.nextSlide = function() {
      $scope.showSlide($scope.currentSlide + 1);
    };

    $scope.prevSlide = function() {
      $scope.showSlide($scope.currentSlide - 1);
    };
  });
