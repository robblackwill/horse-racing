

class Horse {
    constructor(colour, number) {
      this.colour = colour;
      this.number = number;
      //style='width:100px;height:100px;position:relative'
      this.box = document.createElement("div");
      let label = document.createElement("p");
      label.innerText = number + 1;
      this.box.appendChild(label);
      this.box.classList.add("horse");
      document.getElementById("track").appendChild(this.box);
      this.box.style.backgroundColor = colour;
      this.x = 0;
    }
    move() {
      this.x += Math.random() * 10;
      this.x = Math.floor(this.x);
      this.box.style.left = this.x + "px";
      if (this.x > 800) {
        winner = this;
      }
    }
  }
  
  
  let horses = [];
  let winner = null;
  let money = 100;
  colors = [
    "red",
    "orange",
    "yellow",
    "white",
    "blue",
    "indigo",
    "violet",
    "black",
    "brown",
    "pink",
    "azure",
  ];
  const odds = 8
  for (let h = 0; h < 8; h++) {
    horses[h] = new Horse(colors[h], h);
  }
  function start() {
    //setInterval (moveBox,50)
    requestAnimationFrame(moveHorses);
  }
  function moveHorses() {
    for (let h of horses) {
      h.move();
    }
    if (winner === null) {
      requestAnimationFrame(moveHorses);
    } else {
      // get the value in the text box (chosenHorse)
      let chosenHorse = document.getElementById('chosenHorse').value
      
      // check if the winning horse is the same
      if (chosenHorse == winner.number + 1) {
          // We won!
          alert(`The winner is ${winner.colour}, you won!!`);
  
          // so need to add winnings to money
          let winnings = document.getElementById('stake').value
          money += (winnings * odds)
  
          //, and update money.
          updateMoney()
      } else {
          // We lost :(
          alert(`The winner is ${winner.colour}, bad luck.`);
  
          money -= document.getElementById('stake').value
          updateMoney()
      }
      
      showReset()
    }
    /*
          if(x<900){
              requestAnimationFrame(moveHorses)
          } 
          */
  }
  
  const hideReset = () => {
      document.getElementById('reset').style.display = 'none'
  }
  
  hideReset()
  
  const showReset = () => {
      document.getElementById('reset').style.display = 'inline-block'
  }
  
  //betting element
  //bank = 100 , stake (input), odds, update, horses worth different odds
  
  
  const updateMoney = () => {
    let moneyElement = document.querySelector("#bank");
    moneyElement.innerHTML = `£${money}💷`;
  };
  updateMoney();
  
  let stake = document.getElementById("stake").value;
  
  const reset = () => {
      // reset winner
      winner = null
  
      // reset all the horses
      for (let i = 0; i < 8; i += 1) {
          horses[i].x = 0;
          horses[i].box.style.left = "0px";
      }
  
      hideReset()
  }