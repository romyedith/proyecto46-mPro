class Form {
  constructor() {
    this.input = createInput("Nombre");
    this.button = createButton("Jugar");
    this.greeting = createElement("h2");
    this.title = createElement("h2");
    //this.reset = createButton("Reiniciar");
    this.greeting2 = createElement("h2");
  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  display() {
    this.title.html("RECOLECTOR DE FRUTAS");
    this.title.position(25, 50);
    this.title.style("font-size", "70px");
    this.title.style("color", "skyblue");
    this.input.position(350, 200);
    this.input.style("width", "200px");
    this.input.style("height", "20px");
    this.input.style("background", "lavender");
    this.button.position(360, 400);
    this.button.style("width", "200px");
    this.button.style("height", "40px");
    this.button.style("background", "lightpink");
    

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hola " + player.name);
      this.greeting.position(200, 250);
      this.greeting.style("color", "white");
      this.greeting.style("font-size", "50px");
    });
  }

  win() {
    for (var i in allPlayers) {
      if (allPlayers[i].winner) {

        //Muestra el mensaje de Felicitaciones con el nombre del ganador.
        //El nombre del ganador se puede obtener de allPlayers[i].name

        //Escribe tu código después de esta línea.
       

        //Escribe tu código antes de esta línea.


        this.greeting2.style("color", "white");
        this.greeting2.style("font-size", "30px");
      }
    }
  }
}

        