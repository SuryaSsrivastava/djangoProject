var nbDrop = 800;

  function randRange(maxNum, minNum) {
   return (Math.floor(Math.random(10) * (maxNum - minNum + 1)) + minNum);
  }

  function createRain() {
   for (i = 0; i < nbDrop; i++) {

    var dropLeft = randRange(0, 3000);
    var dropTop = randRange(-1000, 1000);
    $('.rain').append('<div class="drop" id="drop'+ i +'"></div>');
    $('#drop' + i).css('left', dropLeft);
    $('#drop' + i).css('top', dropTop);
   }
  }
