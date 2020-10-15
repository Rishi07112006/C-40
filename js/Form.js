class Form {

  constructor() {
    //creating the form
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  //hide function
  hide(){
    //hides the form when all 4 players have entered
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    //creates the title in the form
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    //displaying the place where we enter the name, the play button and the reset button
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    //if the mouse button is pressed the input area and the play button will get hidden, the player's name will be displayed in the greeting message and the playerCount will get increased by 1
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    //if the mouse is pressed on reset button then the playerCount and the gameState will become 0
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
