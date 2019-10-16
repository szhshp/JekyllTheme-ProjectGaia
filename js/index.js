$(function(){

  function appendMusicPlayer(arrMusicID) {
    musicIDIndex = Math.floor(Math.random()*(arrMusicID.length))
    if (!Number.isInteger(arrMusicID[musicIDIndex])) return;
    $('body').append('<audio id="bgm" style="position: absolute; bottom: 10px; right: 20px; height: 40px; width: 180px;" src="https://music.163.com/song/media/outer/url?id='+arrMusicID[musicIDIndex]+'.mp3" controls="controls"></audio>');
    /* no css loaded in outside framework, so put styles here */
  }

  function resizeFrame(){
    $('body').css('height',document.documentElement.clientHeight -5);
  }

  function indexRedirect() {
    let pageName = getQueryString('pagename');
    if (pageName!=null) {
      $('iframe.content').attr('src',pageName);
    }
    resizeFrame()
  }

  function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }


  var arrMusicID = [];

  /*get dynamic music list and append player in async ajax*/
  $.ajax({
    url: "https://neteasecloudmusicapi-szhshpdev.szhshp1.now.sh/playlist/detail?id=784666078",
    dataType: 'json',
    success: function(json){
      for (var i = json.playlist.trackIds.length - 1; i >= 0; i--) {
        arrMusicID.push(json.playlist.trackIds[i].id);
      };
      appendMusicPlayer(arrMusicID);
    },
    error: function(){
      arrMusicID = [452814326 ,439142571 ,32977723 ,463718 ,33111329 ,34204596 ,29787089 ,786222 ,139737 ,460156172 ,438904125 ,28445575 ,456301987];
      appendMusicPlayer(arrMusicID);
    }
  });

  indexRedirect();

  $(window).resize(function() {
    resizeFrame()
  });

});

