(function IIFE() {
  var list = [
  {
    id: 1,
    url:
    "file:///C:/Users/User/Desktop/Cruxer%20Music%20Player/Musics/Alan%20Walker%20-%20Faded%20(%20Lyrics%20).mp3",
    author: "Alan Walker",
    title: "Faded",
    cover:
    "" },

  {
    id: 2,
    url:
    "file:///C:/Users/User/Desktop/Cruxer%20Music%20Player/Musics/DJ%20Snake%20-%20Taki%20Taki%20ft.%20Selena%20Gomez,%20Ozuna,%20Cardi%20B.mp3",
    author: "D J Snake",
    title: "Taki Taki",
    cover:
    "file:///C:/Users/User/Desktop/Player/Dark%20Red%20Player%20Part%20One/cover2.jpeg" },

  {
    id: 3,
    url:
    "file:///C:/Users/User/Desktop/Cruxer%20Music%20Player/Musics/Lil%20Nas%20X%20-%20Old%20Town%20Road%20(feat.%20Billy%20Ray%20Cyrus)%20[Remix].mp3",
    author: "Lil nas X",
    title: "Old Town Road",
    cover:
    "file:///C:/Users/User/Desktop/Player/Dark%20Red%20Player%20Part%20One/cover3.jpg" },

  {
    id: 4,
    url:
    "file:///C:/Users/User/Desktop/Cruxer%20Music%20Player/Musics/K-391%20&%20Alan%20Walker%20-%20Ignite%20(feat.%20Julie%20Bergan%20&%20Seungri)%20(192%20%20kbps).mp3",
    author: "Alan Walker",
    title: "Ignite",
    cover:
    "https://vignette.wikia.nocookie.net/alan-walker/images/f/f0/Ignite.jpeg/revision/latest/scale-to-width-down/340?cb=20191205023118" },

  {
    id: 5,
    url:
    "file:///C:/Users/User/Desktop/Cruxer%20Music%20Player/Musics/Alan%20Walker,%20Sabrina%20Carpenter%20&%20Farruko%20%20-%20On%20My%20Way.mp3",
    author: "Alan Walker",
    title: "On My Way",
    cover:
    "https://fsa.zobj.net/crop.php?r=EDEhZ5ghCF49L1Vz4RzoBiR5PpYIMR6MMTtVUQfRD5AoYAu3CoYeWwrkSpKxtdCUeonwNS2ekSLkCSoMVys13VYcp_miM0lBSzsOnqCG2Uxzx6jx0pTfShDDLMXOCDjsrKegnJXIZbEet8_3" },

  {
    id: 6,
    url:
    "file:///C:/Users/User/Desktop/Cruxer%20Music%20Player/Musics/Marshmello%20ft.%20Bastille%20-%20Happier%20(Official).mp3",
    author: "Marshmello",
    title: "Happier",
    cover:
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Happier_remixes.png/220px-Happier_remixes.png" },

  {
    id: 7,
    url:
    "file:///C:/Users/User/Desktop/Cruxer%20Music%20Player/Musics/Marshmello%20-%20Alone%20(Official%20Music%20Video).mp3",
    author: "Marshmello",
    title: "Alone",
    cover:
    "https://i1.sndcdn.com/artworks-000344148633-qrms3b-t500x500.jpg" },

  {
    id: 8,
    url:
    "file:///C:/Users/User/Desktop/Cruxer%20Music%20Player/Musics/RapGod.mp3",
    author: "Eminem",
    title: "Rap God",
    cover:
    "https://www.gannett-cdn.com/presto/2020/02/14/PDTN/5964bc4f-1bd8-440f-8a05-e57c5083a30c-Rap_God.jpg" },

  {
    id: 9,
    url:
    "file:///C:/Users/User/Desktop/Cruxer%20Music%20Player/Musics/Billie%20Eilish%20-%20bad%20guy.mp3",
    author: "Billie Eilish",
    title: "Bad Guy",
    cover:
    "https://i.pinimg.com/originals/b4/62/ed/b462ed262d726979be0ad2e7f6d949ca.jpg" }];



  var currentId = 0;
  var isPlaying = false;
  var isLoop = true;
  var isShuffle = false;
  var currentAudio = "music1";
  var timer = null;
  var loopOne = false;

  var currentTimeIndicator = document.querySelector(".music-time__current");
  var leftTimeIndicator = document.querySelector(".music-time__last");
  var progressBar = document.getElementById("length");
  var playBtn = document.querySelector(".play");
  var cover = document.querySelector(".cover");
  var title = document.querySelector(".music-player__title");
  var author = document.querySelector(".music-player__author");

  var loopBtn = document.getElementById("loop");
  var shuffleBtn = document.getElementById("shuffle");
  var forwardBtn = document.getElementById("forward");
  var backwardBtn = document.getElementById("backward");
  var prevBtn = document.getElementById("prev");
  var nextBtn = document.getElementById("next");
  var progressDiv = document.getElementById("progress");

  function play(e) {
    if (!isPlaying) {
      // console.log('play');
      e.target.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/pause.svg";
      e.target.alt = "Pause";
      isPlaying = true;
      document.getElementById(currentAudio).play();
      showTime();
    } else {
      // console.log('pause');
      e.target.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
      e.target.alt = "Play";
      document.getElementById(currentAudio).pause();
      isPlaying = false;
      clearInterval(timer);
    }
  }

  function changeBar() {
    var audio = document.getElementById(currentAudio);
    var percentage = (audio.currentTime / audio.duration).toFixed(3);
    progressBar.style.transition = "";
    // console.log(audio.currentTime);

    //set current time
    var minute = Math.floor(audio.currentTime / 60);
    var second = Math.floor(audio.currentTime % 60);
    var leftTime = audio.duration - audio.currentTime;
    currentTimeIndicator.innerHTML =
    ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);

    //set left time
    var leftMinute = Math.floor(leftTime / 60);
    var leftSecond = Math.floor(leftTime % 60);

    leftTimeIndicator.innerHTML =
    ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);

    //set time bar
    progressBar.style.width = percentage * 100 + "%";
  }

  function showTime() {
    timer = setInterval(function () {return changeBar();}, 500);
  }

  function nextMusic(mode) {
    playBtn.src =
    "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
    playBtn.alt = "Play";
    document.getElementById(currentAudio).pause();
    isPlaying = false;
    clearInterval(timer);

    if (mode === "next") {
      currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
      init();
    } else {
      currentId = currentId - 1 < 0 ? list.length - 1 : currentId - 1;
      init();
    }
  }

  function shuffle(e) {
    isShuffle = !isShuffle;
    if (isShuffle) {
      e.target.parentNode.classList.add("is-loop");
    } else {
      e.target.parentNode.classList.remove("is-loop");
    }
  }

  function backward() {
    var audio = document.getElementById(currentAudio);
    audio.currentTime -= 5;
    if (!isPlaying) {
      changeBar();
    }
  }

  function forward() {
    var audio = document.getElementById(currentAudio);
    audio.currentTime += 5;
    if (!isPlaying) {
      changeBar();
    }
  }

  function stopMusic() {
    playBtn.src =
    "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
    playBtn.alt = "Play";
    isPlaying = false;
  }

  function goToNextMusic() {
    var newId = currentId;
    while (isShuffle && !loopOne && newId === currentId) {
      newId = Math.floor(Math.random() * Math.floor(list.length - 1));
    }

    if (!isShuffle && !loopOne) {
      currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
    }
    if (!isShuffle && loopOne) {
      currentId = currentId;
    }

    if (isShuffle) {
      currentId = newId;
    }
    init();
    document.getElementById(currentAudio).play();
  }

  function loop(e) {
    var audio = document.getElementById(currentAudio);

    if (!isLoop && !loopOne) {
      isLoop = true;
      loopOne = false;
      // console.log('is loop');
      e.target.parentNode.classList.add("is-loop");
      e.target.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loop.svg";
      audio.loop = false;
      audio.onended = function (e) {return goToNextMusic();};
      console.log(isLoop, loopOne);
    } else if (isLoop && !loopOne) {
      // console.log('is loop one');
      isLoop = true;
      loopOne = true;
      e.target.parentNode.classList.add("is-loop");
      e.target.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loopone.svg";
      audio.loop = true;
      audio.onended = function (e) {return goToNextMusic();};
      console.log(isLoop, loopOne);
    } else {
      // console.log('not loop');
      isLoop = false;
      loopOne = false;
      e.target.parentNode.classList.remove("is-loop");
      e.target.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loop.svg";
      audio.loop = false;
      audio.onended = function (e) {return stopMusic();};
      console.log(isLoop, loopOne);
    }
  }

  function progress(e) {
    var audio = document.getElementById(currentAudio);
    //get current position and minus progress bar's x position to get current position in progress bar
    var pos =
    (e.pageX - progressDiv.getClientRects()[0].x) /
    progressDiv.getClientRects()[0].width;
    audio.currentTime = pos * audio.duration;
    changeBar();
  }

  function init() {
    //reset music duration and setup audio
    var audio =
    document.getElementById(currentAudio) === null ?
    new Audio() :
    document.getElementById(currentAudio);
    audio.src = list[currentId].url;
    audio.id = currentAudio;
    document.getElementById(currentAudio) === null ?
    document.body.appendChild(audio) :
    "";

    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    document.getElementById(currentAudio).currentTime = 0;

    title.innerHTML = list[currentId].title;
    author.innerHTML = list[currentId].author;
    cover.src = list[currentId].cover;

    //set current time
    audio.addEventListener("loadedmetadata", function () {
      var leftMinute = Math.floor(audio.duration / 60);
      var leftSecond = Math.floor(audio.duration % 60);
      currentTimeIndicator.innerHTML = "00:00";
      leftTimeIndicator.innerHTML =
      ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
      progressBar.style.transition = "";
    });

    //set loop
    document.getElementById(currentAudio).onended = function (e) {return goToNextMusic(e);};
  }

  playBtn.addEventListener("click", play);
  loopBtn.addEventListener("click", loop);

  shuffleBtn.addEventListener("click", shuffle);
  forwardBtn.addEventListener("click", forward);
  backwardBtn.addEventListener("click", backward);

  prevBtn.addEventListener("click", function (e) {return nextMusic("prev");});
  nextBtn.addEventListener("click", function (e) {return nextMusic("next");});
  progressDiv.addEventListener("click", function (e) {
    progress(e);
  });

  init();
})();