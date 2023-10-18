var seatData = [];
var chosenSeat = [];
var clickedArea = null;

/* find last seat to revers the order A the farthest seat from screen */
function findLastSeat() {
  let seats = document.querySelectorAll("div.seat-item");
  return seats[seats.length - 1];
}

/* random number to generate dummies of seat ID */
function randomNumber(min, max) {
  let random = Math.random();
  return Math.floor(random * (max - min) + min);
}

/* Simuate occupied seats */
function occupied() {
  for (let i = 0; i < 10; i++) {
    let id = String.fromCharCode(randomNumber(65, 79)) + randomNumber(1, 18);
    let seat = document.querySelector("#" + id);
    for (let j = 0; j < seatData.length; j++) {
      if (seatData[j].id === id) {
        seatData[j].available = false;
        seat.classList.add("occupied");
      }
    }
  }
}

/* show the indicator of chosen seat and list of chosen seat */
function showSelectedSeat() {
  let showChosen = "empty";
  for (let j = 0; j < chosenSeat.length; j++) {
    if (j === 0) {
      showChosen = chosenSeat[j].id;
    } else {
      showChosen += ", " + chosenSeat[j].id;
    }
  }
  document.querySelector("#selectedSeat").innerHTML = chosenSeat.length;
  if (chosenSeat.length > 1) {
    document.querySelector("#plural").innerHTML = "s";
  } else {
    document.querySelector("#plural").innerHTML = "";
  }
  if (chosenSeat.length == 0) {
    document.querySelector("#chosenSeats").innerHTML = "empty";
  }
  if (chosenSeat.length > 3) {
    let fiveFirst = "";
    for (let k = 0; k < 3; k++) {
      fiveFirst += chosenSeat[k].id + ", ";
    }
    document.querySelector("#chosenSeats").innerHTML =
      fiveFirst + " (" + (chosenSeat.length - 3) + " more)";
  } else {
    document.querySelector("#chosenSeats").innerHTML = showChosen;
  }
}

/* generate the seat data and allocate */
function generateSeatData() {
  // Using for loop for (A-Z):
  for (i = 79; i >= 65; i--) {
    // Using for loop for (1-18):
    for (j = 18; j >= 1; j--) {
      let seatId = String.fromCharCode(i) + j;
      seatData.push({ id: seatId, available: true, chosen: false, area: null });
    }
  }
  seatAllocation();
}

/* allocate the seats into layout */
function seatAllocation() {
  const seatFrontLeft = document.querySelector("div.seat-front-left");
  const seatFrontCenter = document.querySelector("div.seat-front-center");
  const seatFrontRight = document.querySelector("div.seat-front-right");
  const seatMidLeft = document.querySelector("div.seat-mid-left");
  const seatMidCenter = document.querySelector("div.seat-mid-center");
  const seatMidRight = document.querySelector("div.seat-mid-right");
  const seatBackLeft = document.querySelector("div.seat-back-left");
  const seatBackCenter = document.querySelector("div.seat-back-center");
  const seatBackRight = document.querySelector("div.seat-back-right");
  let seat = '<div class="seat-item" onclick="clickSeat(this)"></div>';
  let gapColumn = 0;
  let gapRow = 0;
  // allocate front-left seat
  for (i = 79; i >= 76; i--) {
    if (gapRow === 4 || gapRow === 8) {
      let last = findLastSeat();
    }
    // Using for loop for (1-18):
    for (j = 18; j >= 15; j--) {
      seatFrontLeft.innerHTML += seat;
      let seatId = String.fromCharCode(i) + j;
      let last = findLastSeat();
      last.setAttribute("id", seatId);
      last.setAttribute("area", 1);
      last.innerHTML = seatId;
      if (gapColumn === 4 || gapColumn === 14) {
        let last = findLastSeat();
      }
      for (let k = 0; k < seatData.length; k++) {
        if (seatData[k].id === seatId) {
          seatData[k].area = 1;
        }
      }
    }
  }
  // allocate front-center seat
  for (i = 79; i >= 76; i--) {
    if (gapRow === 4 || gapRow === 8) {
      let last = findLastSeat();
    }
    // Using for loop for (1-18):
    for (j = 14; j >= 5; j--) {
      seatFrontCenter.innerHTML += seat;
      let seatId = String.fromCharCode(i) + j;
      let last = findLastSeat();
      last.setAttribute("id", seatId);
      last.setAttribute("area", 2);
      last.innerHTML = seatId;
      if (gapColumn === 4 || gapColumn === 14) {
        let last = findLastSeat();
      }
      for (let k = 0; k < seatData.length; k++) {
        if (seatData[k].id === seatId) {
          seatData[k].area = 2;
        }
      }
    }
  }
  // allocate front-right seat
  for (i = 79; i >= 76; i--) {
    if (gapRow === 4 || gapRow === 8) {
      let last = findLastSeat();
    }
    // Using for loop for (1-18):
    for (j = 4; j >= 1; j--) {
      seatFrontRight.innerHTML += seat;
      let seatId = String.fromCharCode(i) + j;
      let last = findLastSeat();
      last.setAttribute("id", seatId);
      last.setAttribute("area", 3);
      last.innerHTML = seatId;
      if (gapColumn === 4 || gapColumn === 14) {
        let last = findLastSeat();
      }
      for (let k = 0; k < seatData.length; k++) {
        if (seatData[k].id === seatId) {
          seatData[k].area = 3;
        }
      }
    }
  }
  // allocate mid-left seat
  for (i = 75; i >= 72; i--) {
    if (gapRow === 4 || gapRow === 8) {
      let last = findLastSeat();
    }
    // Using for loop for (1-18):
    for (j = 18; j >= 15; j--) {
      seatMidLeft.innerHTML += seat;
      let seatId = String.fromCharCode(i) + j;
      let last = findLastSeat();
      last.setAttribute("id", seatId);
      last.setAttribute("area", 4);
      last.innerHTML = seatId;
      if (gapColumn === 4 || gapColumn === 14) {
        let last = findLastSeat();
      }
      for (let k = 0; k < seatData.length; k++) {
        if (seatData[k].id === seatId) {
          seatData[k].area = 4;
        }
      }
    }
  }
  // allocate mid-center seat
  for (i = 75; i >= 72; i--) {
    if (gapRow === 4 || gapRow === 8) {
      let last = findLastSeat();
    }
    // Using for loop for (1-18):
    for (j = 14; j >= 5; j--) {
      seatMidCenter.innerHTML += seat;
      let seatId = String.fromCharCode(i) + j;
      let last = findLastSeat();
      last.setAttribute("id", seatId);
      last.setAttribute("area", 5);
      last.innerHTML = seatId;
      if (gapColumn === 4 || gapColumn === 14) {
        let last = findLastSeat();
      }
      for (let k = 0; k < seatData.length; k++) {
        if (seatData[k].id === seatId) {
          seatData[k].area = 5;
        }
      }
    }
  }
  // allocate mid-right seat
  for (i = 75; i >= 72; i--) {
    if (gapRow === 4 || gapRow === 8) {
      let last = findLastSeat();
    }
    // Using for loop for (1-18):
    for (j = 4; j >= 1; j--) {
      seatMidRight.innerHTML += seat;
      let seatId = String.fromCharCode(i) + j;
      let last = findLastSeat();
      last.setAttribute("id", seatId);
      last.setAttribute("area", 6);
      last.innerHTML = seatId;
      if (gapColumn === 4 || gapColumn === 14) {
        let last = findLastSeat();
      }
      for (let k = 0; k < seatData.length; k++) {
        if (seatData[k].id === seatId) {
          seatData[k].area = 6;
        }
      }
    }
  }
  // allocate back-left seat
  for (i = 71; i >= 65; i--) {
    if (gapRow === 4 || gapRow === 8) {
      let last = findLastSeat();
    }
    // Using for loop for (1-18):
    for (j = 18; j >= 15; j--) {
      seatBackLeft.innerHTML += seat;
      let seatId = String.fromCharCode(i) + j;
      let last = findLastSeat();
      last.setAttribute("id", seatId);
      last.setAttribute("area", 7);
      last.innerHTML = seatId;
      if (gapColumn === 4 || gapColumn === 14) {
        let last = findLastSeat();
      }
      for (let k = 0; k < seatData.length; k++) {
        if (seatData[k].id === seatId) {
          seatData[k].area = 7;
        }
      }
    }
  }
  // allocate back-center seat
  for (i = 71; i >= 65; i--) {
    if (gapRow === 4 || gapRow === 8) {
      let last = findLastSeat();
    }
    // Using for loop for (1-18):
    for (j = 14; j >= 5; j--) {
      seatBackCenter.innerHTML += seat;
      let seatId = String.fromCharCode(i) + j;
      let last = findLastSeat();
      last.setAttribute("id", seatId);
      last.setAttribute("area", 8);
      last.innerHTML = seatId;
      if (gapColumn === 4 || gapColumn === 14) {
        let last = findLastSeat();
      }
      for (let k = 0; k < seatData.length; k++) {
        if (seatData[k].id === seatId) {
          seatData[k].area = 8;
        }
      }
    }
  }
  // allocate back-right seat
  for (i = 71; i >= 65; i--) {
    if (gapRow === 4 || gapRow === 8) {
      let last = findLastSeat();
    }
    // Using for loop for (1-18):
    for (j = 4; j >= 1; j--) {
      seatBackRight.innerHTML += seat;
      let seatId = String.fromCharCode(i) + j;
      let last = findLastSeat();
      last.setAttribute("id", seatId);
      last.setAttribute("area", 9);
      last.innerHTML = seatId;
      if (gapColumn === 4 || gapColumn === 14) {
        let last = findLastSeat();
      }
      for (let k = 0; k < seatData.length; k++) {
        if (seatData[k].id === seatId) {
          seatData[k].area = 9;
        }
      }
    }
  }
  occupied();
}

/* behavior when seat clicked */
function clickSeat(element) {
  for (let i = 0; i < seatData.length; i++) {
    if (seatData[i].id === element.id && !seatData[i].available) {
      return;
    }
    if (seatData[i].id === element.id && seatData[i].available) {
      if (!seatData[i].chosen) {
        element.classList.add("chosen");
      } else {
        element.classList.remove("chosen");
      }
      seatData[i].chosen = !seatData[i].chosen;
      if (seatData[i].chosen) {
        chosenSeat.push({ id: seatData[i].id, area: seatData[i].area });
      } else {
        let index = chosenSeat.findIndex((item) => item.id === seatData[i].id);
        if (index !== -1) {
          chosenSeat.splice(index, 1);
        }
      }
    }
  }
  showSelectedSeat();
}

/* behavior when area clicked */
function clickArea(element, row, maxAlpha, minAlpha, maxNumber, minNumber) {
  const overlay = document.querySelector(".overlay");
  let display = window.getComputedStyle(overlay).getPropertyValue("display");
  const seatItem = document.querySelector(".modal-dialog > .seat-layout");
  seatItem.innerHTML = "";
  seatItem.style.gridTemplateColumns = "repeat(" + row + ", max-content)";
  let seat = '<div class="seat-item" onclick="clickSeat(this)"></div>';
  if (display === "none") {
    overlay.style.display = "flex";
  }
  // allocate seat
  for (i = maxAlpha; i >= minAlpha; i--) {
    for (j = maxNumber; j >= minNumber; j--) {
      seatItem.innerHTML += seat;
      let seatId = String.fromCharCode(i) + j;
      let last = findLastSeat();
      last.setAttribute("id", seatId);
      last.innerHTML = seatId;
      for (let k = 0; k < seatData.length; k++) {
        if (seatData[k].id == seatId && !seatData[k].available) {
          document
            .querySelector(".seat-layout>.seat-item#" + seatId)
            .classList.add("occupied");
        }
      }
      for (let k = 0; k < chosenSeat.length; k++) {
        if (chosenSeat[k].id == seatId) {
          let test = document.querySelector(
            ".seat-layout>.seat-item#" + chosenSeat[k].id
          );
          test.classList.add("chosen");
        }
      }
    }
  }
  if (chosenSeat.length > 0) {
    for (let i = 0; i < chosenSeat.length; i++) {
      for (let j = 0; j < seatData.length; j++) {
        if (chosenSeat[i].id === seatData[j].id) {
          document
            .querySelector("#" + chosenSeat[i].id)
            .classList.add("chosen");
        }
      }
    }
  }
  clickedArea = element;
}

function closeModalDialog() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
  let chosenArea = clickedArea.getAttribute("layout-area");
  if (chosenSeat.length > 0) {
    for (let i = 0; i < chosenSeat.length; i++) {
      if (chosenArea == chosenSeat[i].area) {
        let divArea = document.querySelector(
          '[layout-area="' + chosenArea + '"]'
        );
        divArea.classList.add("chosen");
        break;
      }
    }
  } else {
    let divArea = document.querySelector('[layout-area="' + chosenArea + '"]');
    divArea.classList.remove("chosen");
  }
}

generateSeatData();
