(function () {
  var fsicon = document.createElement("button");
  fsicon.innerHTML = "FULL SCREEN";
  fsicon.value = "FULL SCREEN";
  fsicon.id = "fsicon";

  fsicon.style.display = "none";

  document.body.appendChild(fsicon);

  var fsicon = document.getElementById("fsicon");

  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 122) {
      e.preventDefault();
      fsicon.click();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 116) {
      e.preventDefault();
      window.close();
    }
  });

  if (fsicon) {
    fsicon.addEventListener(
      "click",
      function () {
        if (fsicon.getAttribute("value") === "FULL SCREEN") {
          console.log("hello");
          var docElm = document.documentElement;
          if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
          } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
          } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }
      },
      false
    );
  }

  if (fsicon) {
    document.addEventListener(
      "fullscreenchange",
      function () {
        if (document.fullscreenElement) {
          document.getElementById(
            "closing"
          ).innerText = `Press F11 else exiting in 10 seconds...`;
          fsicon.setAttribute("value", "EXIT FULL SCREEN");
          fsicon.innerHTML = "EXIT FULL SCREEN";
          // document.getElementById('whole_chat').style.marginTop = 450 + 'px'
          document.getElementById("closing").style.display = "none";
          document.getElementById("report").style.display = "none";
          document.getElementById("select_div").style.marginLeft = "50.2%";
          document.getElementById("cap_people").style.marginTop = "-1.9%";
          document.getElementById("MyClockDisplay").style.marginLeft =
            74.38 + "%";
          document.getElementById("editor").style.height = 850 + "px";
          document.getElementById("line_numbering_area").style.height =
            850 + "px";
        } else {
          fsicon.setAttribute("value", "FULL SCREEN");
          fsicon.innerHTML = "FULL SCREEN";
          document.getElementById("report").style.display = "inline";
          document.getElementById("select_div").style.marginLeft = "9.20%";
          document.getElementById("cap_people").style.marginTop = "0.0%";
          // document.getElementById('whole_chat').style.marginTop = 411 + 'px'
          document.getElementById("closing").style.display = "inline-block";
          document.getElementById("MyClockDisplay").style.marginLeft = 20 + "%";
          document.getElementById("editor").style.height = 807 + "px";
          document.getElementById("line_numbering_area").style.height =
            807 + "px";

          let seconds = 10;
          function timer() {
            let countdown = setInterval(function () {
              seconds--;
              document.getElementById(
                "closing"
              ).innerText = `Press F11 else exiting in ${seconds} seconds...`;

              if (document.fullscreen == true) {
                document.getElementById(
                  "closing"
                ).innerText = `Press F11 else exiting in 10 seconds...`;
                document.getElementById("closing").style.display = "none";
                document.getElementById("MyClockDisplay").style.marginLeft =
                  // window.close();
                  74.38 + "%";
                clearInterval(countdown);
              } else if (seconds <= 0) {
                window.close();
              }

              document.addEventListener("keydown", (e) => {
                if (e.keyCode == 122) {
                  seconds = 10;
                  document.getElementById("closing").style.display = "none";
                  document.getElementById("MyClockDisplay").style.marginLeft =
                    74.38 + "%";
                  clearInterval(countdown);
                }
              });
            }, 1000);
          }

          timer();
        }
      },
      false
    );

    document.addEventListener(
      "mozfullscreenchange",
      function () {
        if (document.mozFullScreen) {
          fsicon.setAttribute("value", "EXIT FULL SCREEN");
          fsicon.innerHTML = "EXIT FULL SCREEN";
          document.getElementById(
            "closing"
          ).innerText = `Press F11 else exiting in 10 seconds...`;
          // document.getElementById('whole_chat').style.marginTop = 400 + 'px'
          document.getElementById("closing").style.display = "none";
          document.getElementById("report").style.display = "none";
          document.getElementById("cap_people").style.marginTop = "-1.9%";
          document.getElementById("select_div").style.marginLeft = "50.2%";
          document.getElementById("MyClockDisplay").style.marginLeft =
            74.38 + "%";
        } else {
          fsicon.setAttribute("value", "FULL SCREEN");
          fsicon.innerHTML = "FULL SCREEN";
          // document.getElementById('whole_chat').style.marginTop = 350 + 'px'
          document.getElementById("closing").style.display = "inline-block";
          document.getElementById("report").style.display = "inline";
          document.getElementById("select_div").style.marginLeft = "9.20%";
          document.getElementById("cap_people").style.marginTop = "0.0%";
          document.getElementById("MyClockDisplay").style.marginLeft = 20 + "%";

          let seconds = 10;
          function timer() {
            let countdown = setInterval(function () {
              seconds--;
              document.getElementById(
                "closing"
              ).innerText = `Press F11 else exiting in ${seconds} seconds...`;

              if (document.fullscreen == true) {
                document.getElementById(
                  "closing"
                ).innerText = `Press F11 else exiting in 10 seconds...`;
                document.getElementById("closing").style.display = "none";
                document.getElementById("MyClockDisplay").style.marginLeft =
                  // window.close();
                  74.38 + "%";
                clearInterval(countdown);
              } else if (seconds <= 0) {
                window.close();
              }

              document.addEventListener("keydown", (e) => {
                if (e.keyCode == 122) {
                  seconds = 10;
                  document.getElementById("closing").style.display = "none";
                  document.getElementById("MyClockDisplay").style.marginLeft =
                    74.38 + "%";
                  clearInterval(countdown);
                }
              });
            }, 1000);
          }

          timer();
        }
      },
      false
    );

    document.addEventListener(
      "webkitfullscreenchange",
      function () {
        if (document.webkitIsFullScreen) {
          fsicon.setAttribute("value", "EXIT FULL SCREEN");
          fsicon.innerHTML = "EXIT FULL SCREEN";
          document.getElementById(
            "closing"
          ).innerText = `Press F11 else exiting in 10 seconds...`;
          // document.getElementById('whole_chat').style.marginTop = 400 + 'px'
          document.getElementById("closing").style.display = "none";
          document.getElementById("report").style.display = "none";
          document.getElementById("cap_people").style.marginTop = "-1.9%";
          document.getElementById("select_div").style.marginLeft = "50.2%";
          document.getElementById("MyClockDisplay").style.marginLeft =
            74.38 + "%";
        } else {
          fsicon.setAttribute("value", "FULL SCREEN");
          fsicon.innerHTML = "FULL SCREEN";
          // document.getElementById('whole_chat').styl.width = 550 + 'px'
          document.getElementById("closing").style.display = "inline-block";
          document.getElementById("report").style.display = "inline";
          document.getElementById("select_div").style.marginLeft = "9.20%";
          document.getElementById("cap_people").style.marginTop = "0.0%";
          document.getElementById("MyClockDisplay").style.marginLeft = 20 + "%";

          let seconds = 10;
          function timer() {
            let countdown = setInterval(function () {
              seconds--;
              document.getElementById(
                "closing"
              ).innerText = `Press F11 else exiting in ${seconds} seconds...`;

              if (document.fullscreen == true) {
                document.getElementById(
                  "closing"
                ).innerText = `Press F11 else exiting in 10 seconds...`;
                document.getElementById("closing").style.display = "none";
                document.getElementById("MyClockDisplay").style.marginLeft =
                  // window.close();
                  74.38 + "%";
                clearInterval(countdown);
              } else if (seconds <= 0) {
                window.close();
              }

              document.addEventListener("keydown", (e) => {
                if (e.keyCode == 122) {
                  seconds = 10;
                  document.getElementById("closing").style.display = "none";
                  document.getElementById("MyClockDisplay").style.marginLeft =
                    74.38 + "%";
                  clearInterval(countdown);
                }
              });
            }, 1000);
          }

          timer();
        }
      },
      false
    );
  }
})();

document.addEventListener(
  "visibilitychange",
  function () {
    if (document.hasFocus()) {
      console.log("well back");
    } else {
      window.close();
    }
  },
  false
);
