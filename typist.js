function type(divname, msg, animspeed, waittime) {
    var waitForIt = setTimeout(function() {
      //A nice little reset may come in useful
      document.getElementById(divname).innerHTML = "";
      var count = -1;
      o = 0;
      split = 0;
      clearInterval(type);

      var o = msg;
      var split = Array.from(o);
  
      var type = setInterval(function() {
        count++;
  
        if (count < split.length) {
          document.getElementById(divname).innerHTML += split[count];
        } else {
          split = 0;
          clearInterval(type);
          console.log(split);
        }
      }, animspeed);
    }, waittime);
  }
  