// class Helper {
// playPauseAndUpdate(song){
//   this.playPause(song)
// }
// $('#time-control .total-time').text( playPauseAndUpdate );
//
// }

class Helper {
  playPauseAndUpdate(song) {
    const duration = player.getDuration();
    $('#time-control .total-time').text ( duration );
    player.playPause(song);
    };

  }
  const helper = new Helper();
