// function hide() {
//   // let hideCard = document.getElementsByClassName("colorbox");
//   document
//     .getElementsByClassName("colorbox")
//     .setAttribute("style", "background-color:black;");
// }
// hide();

let areasArray = [
  "a1",
  "a2",
  "a3",
  "a4",
  "b1",
  "b2",
  "b3",
  "b4",
  "c1",
  "c2",
  "c3",
  "c4",
  "d1",
  "d2",
  "d3",
  "d4",
];

let clickCount = [1, 1];
let memArray = [];
let symbolEval = [];

function unhide(cover) {

  // let coverArea = cover.style.gridArea;
  // let baseArea = "";
  // for (let y = 0; y < areasArray.length; y++ )

  // if (coverArea = 


  let i = 0;
  console.log(clickCount);
  if (
    document.getElementById(cover).style.zIndex == 1 &&
    clickCount.length === 2
  ) {
    document.getElementById(cover).setAttribute("style", "z-index:-1;");
    console.log("First Move");
    clickCount.shift(i);
    console.log(document.getElementById(cover).textContent);
    console.log(clickCount);
    return clickCount;
  } else if (
    document.getElementById(cover).style.zIndex == 1 &&
    clickCount.length === 1
  ) {
    document.getElementById(cover).setAttribute("style", "z-index:-1;");
    console.log("Second Move");
    clickCount.shift(i);
    // if (the symbols match) {
    //   set a value to the card that overwrites  what hide() can do, making it always show (since its a match)
    // } else {
    //   hide();
    //   return (clickCount = [1, 1]);
    // }
  } else {
    hide();
    return (clickCount = [1, 1]);
  }
}

// This is from unhide() if statement
// else {
//   document.getElementById(cover).setAttribute("style", "z-index:1;");
//   console.log("Move up");
// }

function hide() {
  for (let i = 0; i < 16; i++) {
    if (document.getElementById("cover" + (i + 1)).style.zIndex == 1) {
      console.log("Stay");
    } else {
      document
        .getElementById("cover" + (i + 1))
        .setAttribute("style", "z-index:1;");
      console.log("Move up");
    }
  }
}
hide();

// if (document.getElementById("cover" + (i + 1)).style.zIndex == -1) used in else above, not need?
//       document.getElementById("cover" + (i + 1)).setAttribute("style", "z-index:-1;");

function boxSwitch() {
  hide();

  function shuffleArray(array) {
    let currentIndex = array.length;
    // There remain elements to shuffle
    while (0 !== currentIndex) {
      // Pick a remaining element
      let randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // Swap it with the current element.
      let temp = array[currentIndex];
      array[currentIndex] = array[randIndex];
      array[randIndex] = temp;
    }
    return array;
  }
  // Usage of shuffle
  // let areasArray = [
  //   "a1",
  //   "a2",
  //   "a3",
  //   "a4",
  //   "b1",
  //   "b2",
  //   "b3",
  //   "b4",
  //   "c1",
  //   "c2",
  //   "c3",
  //   "c4",
  //   "d1",
  //   "d2",
  //   "d3",
  //   "d4",
  // ];
  areasArray = shuffleArray(areasArray);

  for (let i = 0; i < areasArray.length; i++) {
    document
      .getElementById("box" + (i + 1))
      .setAttribute("style", "grid-area: " + areasArray[i] + ";");
  }

  // This overrides the shuffling loop
  // for (let i = 0; i < areasArray.length; i++) {
  //   document
  //     .getElementById("box" + (i + 1))
  //     .setAttribute("style", "background-color: black;");
  // }
}

boxSwitch();

// console.log(areasArray);

// let randOrder = Math.floor(Math.random() * areasArray.length);
// let setGridArea = areasArray[randOrder];

// console.log(randOrder, setGridArea);

// return;

// const columnStartRight = 4;
// const columnEndRight = 5;
// if (document.getElementById(boxSpace).style.gridColumnStart === 2) {
//   document.getElementById(boxSpace).style.gridColumnStart = 3;
//   document.getElementById(boxSpace).style.gridColumnEnd = 4;
// } else {
//   document.getElementById(boxSpace).style.gridColumnStart = columnStartRight;
//   document.getElementById(boxSpace).style.gridColumnEnd = columnEndRight;
// }

// if (
//   boxSpaceGridArea == 2 / 3 / 3 / 4 ||
//   boxSpaceRowEnd == 3 ||
//   boxSpaceColumnEnd != 5
// ) {
//   // boxSpaceColumnStart += 1;
//   // boxSpaceColumnEnd += 1;
//   // document.getElementById(boxSpace).style.gridColumnStart =
//   //   boxSpaceColumnStart + 1;
//   // document.getElementById(boxSpace).style.gridColumnEnd =
//   //   boxSpaceColumnEnd + 1;
//   console.log("You have chosen one of the three!");
// } else {
//   console.log("Nope");
// }

// document.getElementById(boxSpace).style.gridArea = "2 / (+1) / 3 / (+1)";
// let gridArea = "";
// for (let i = 0; i < numArray.length; i++) {
//   for (let j = 0; j < numArray.length; j++) {
//     const randNumber = Math.floor(
//       Math.random() * (numArray.length - 1 - 0 + 1)
//     );
//     const randLetter = Math.floor(
//       Math.random() * (numArray.length - 1 - 0 + 1)
//     );
//     gridSpace = numArray[randNumber] + letterArray[randLetter];
//   console.log(numArray[i] + letterArray[j]);
//   console.log("This is logging");
//   console.log(typeof gridSpaceArea);
//   console.log([gridSpaceArea].toString());

// Need this to choose once from each array - but not repeat -
//   make that a grid area, then set that grid area to the boxes.
// Maybe best to set the function to reorganize the gridTemplateAreas
//   }
// }

//  boxSwitch();

// This?
// $(".color-box").addEventListener("click", function() {
//     $(".color-box").css("color","white");
// });

// const gridItems = document.querySelectorAll(".colorbox");

// // loop over each grid item and add an event listener
// gridItems.forEach((item) =>
//   item.addEventListener("click", () => {
//     gridItems.style.gridArea = gridSpace;
//   })
// );

// This sets the grid-area to a random grid area, but not exclusively
// let areasArray = [
//   "a1",
//   "a2",
//   "a3",
//   "a4",
//   "b1",
//   "b2",
//   "b3",
//   "b4",
//   "c1",
//   "c2",
//   "c3",
//   "c4",
//   "d1",
//   "d2",
//   "d3",
//   "d4",
// ];

// let randOrder = Math.floor(Math.random() * areasArray.length);
// let setGridArea = areasArray[randOrder];
// document
//   .getElementById(boxSpace)
//   .setAttribute("style", "grid-area: " + setGridArea + ";");
// console.log(randOrder, setGridArea);

// return;
