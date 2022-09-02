import Phaser from "phaser";

import config from "./config/config";
import SpaceInvaders from "./scenes/SpaceInvaders";


class Game extends Phaser.Game {
  constructor() {
    super(config);

    // include ALL scenes in the game
    this.scene.add("SpaceInvaders", SpaceInvaders);

    this.scene.start("SpaceInvaders");

  }
}

const game = new Game(config);
