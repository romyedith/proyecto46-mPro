class Game {
  constructor() {}
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
    player1 = createSprite(200, 400);
    player1.addImage("player1", player_img);

    player2 = createSprite(600, 400);
    player2.addImage("player2", player_img);
    players = [player1, player2];

    obstacleGroup = new Group();
  }

  play() {
    form.hide();

    Player.getPlayerInfo();

    image(back_img, 0, 0, 950, 470);
    var x = 100;
    var y = 200;
    var index = 0;

    drawSprites();

    for (var plr in allPlayers) {
      index = index + 1;
      x = 500 - allPlayers[plr].distance;
      y = 400;

      players[index - 1].x = x;
      players[index - 1].y = y;

      if (index === player.index) {
        fill("black");
        textSize(25);
        text(allPlayers[plr].name, x - 25, y + 25);
      }

      textSize(25);
      fill("white");
      text("Jugador 1 :" + allPlayers.player1.score, 50, 50);
      text("Jugador 2 :" + allPlayers.player2.score, 50, 100);
    }

    if (player.score === 10) {
      gameState = 2;
      game.update(2);
      player.winner = true;
      player.update();
    }

    if (gameState === 1 && player.index !== null) {
      if (keyIsDown(RIGHT_ARROW)) {
        player.distance -= 10;
        player.update();
      }
      if (keyIsDown(LEFT_ARROW)) {
        player.distance += 10;
        player.update();
      }
    }

    if (frameCount % 20 === 0 && gameState === 1) {
      fruits = createSprite(random(100, 850), 0, 100, 100);
      fruits.velocityY = 6;
      var rand = Math.round(random(1, 5));
      switch (rand) {
        case 1:
          fruits.addImage("fruit1", fruit1_img);
          break;
        case 2:
          fruits.addImage("fruit1", fruit2_img);
          break;
        case 3:
          fruits.addImage("fruit1", fruit3_img);
          break;
        case 4:
          fruits.addImage("fruit1", fruit4_img);
          break;
        case 5:
          fruits.addImage("fruit1", fruit5_img);
          break;
      }
      fruitGroup.add(fruits);
    }

    if (player.index !== null) {
      for (var i = 0; i < fruitGroup.length; i++) {
        if (fruitGroup.get(i).isTouching(players)) {
          fruitGroup.get(i).destroy();
          player.score = player.score + 1;
          player.update();
        }
      }
    }
  }

  end() {
    form.win();
  }
}
