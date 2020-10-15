class Player {
  constructor(){
    //stores the value of index, distance and name
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    //the playerCount is reffered from the database
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //the playerCount gets updated
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //the array in which the players are stored gets updated
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //the information of the players is taken from the database
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank = data.val();
      })
  }

  static updateCarsAtEnd(rank){
database.ref('/').update({
  CarsAtEnd:rank
})
  }
  
}
