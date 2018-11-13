'use strict'; 
  var pageloader = document.querySelector('#pageloader');
  var loaderIcon = pageloader.querySelector('.pageloader-icon');

  /* начало центрирования */
  function modalCentering(loaderIcon) {
    var modal = loaderIcon;
    modal.style.top = document.documentElement.clientHeight / 2 + window.pageYOffset - modal.offsetHeight / 2 + 'px';
    modal.style.left = document.documentElement.clientWidth / 2 + window.pageXOffset - modal.offsetWidth / 2 + 'px';

    window.addEventListener('resize', function() {
      modal.style.top = document.documentElement.clientHeight / 2 + window.pageYOffset - modal.offsetHeight / 2 + 'px';
      modal.style.left = document.documentElement.clientWidth / 2 + window.pageXOffset - modal.offsetWidth / 2 + 'px';
    });
  }
  modalCentering(loaderIcon);
  /* конец центрирования */

  window.addEventListener('load', function() {
    var counter = 1;
    loaderIcon.style.opacity = 0;
    (function fadeLoader() {
      if (getComputedStyle(pageloader).opacity > 0) {
        counter -= 0.1;
        pageloader.style.opacity = counter;
        setTimeout(function() {
          fadeLoader();
        }, 1);
      }
      if (getComputedStyle(pageloader).opacity <= 0 || getComputedStyle(pageloader).opacity > 1) {
        document.body.style.overflow = 'visible';
        pageloader.style.display = 'none';
        return;
      }
    })();
  });