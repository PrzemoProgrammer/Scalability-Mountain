const config = {
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 2000 },
    },
  },

  scale: {
    mode: Phaser.Scale.FIT,
    width: 1920,
    height: 1080,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [PreloadScene, MenuScene, PlayScene, HudScene, DeadScene, EndScene],
};

const game = new Phaser.Game(config);
