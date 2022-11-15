    // ! IMAGE / SPRITE /////////
    this.background = this.add
    .image(0, 0, "background")
    .setOrigin(0, 0)
    .setDisplaySize(this.gw, this.gh);

    this.road = this.add
    .tileSprite(this.gw / 2, 0, 685, 1177, "road")
    .setOrigin(0.5, 0);

    // ? PORUSZANIE TILEMAPĄ
    this.road.tilePositionY -= 8;

    // ! RANDOM NUMBER ///////////
    this.randomNumber =  Math.floor(Phaser.Math.Between(0, 9))

    // ! ANIMS /////////////////

    this.background = this.add
    .sprite(0, 0, "background")
    .setOrigin(0, 0)
    .setDisplaySize(this.gw, this.gh);

// ? ANIMS KLATKI TYLKO SZEROKO
    this.anims.create({
      key: "cannon",
      frames: "cannon",
      frameRate: 10,
      repeat: 0,
    });

    //? ANIMS KLATKI SZEROKO I W DÓŁ
    this.anims.create({
      key: 'kick',
      frames: this.anims.generateFrameNumbers('brawler', { frames: [ 10, 11, 12, 13, 10 ] }),
      frameRate: 8,
      repeat: -1,
      repeatDelay: 2000
  });

    // ? ///////////
    this.penguin.play("penguin-death")
    .once("animationcomplete", () => {

    });

    // ? ///////////
    .on('animationupdate', (anim, frame) => {
        this.character.off('animationupdate')
      })

    // ? ///////////
    states.playReverse('frozenState', true)

// ? krótszy zapis ładowania animacji chodzenia w innych skinach//////////
//to w preload /////////
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 6; j++) {
        this.load.image(
          `Character ${i}${j}`,
          `Walking Character ${i}/0${j}.png`
        );
      }
    }

    //to w create ////////
    for (let i = 1; i <= 4; i++) {
      const frames = [];
      for (let j = 1; j <= 6; j++) {
        frames.push({ key: `Character ${i}${j}`, frame: null });
      }

      const anim = this.anims.create({
        key: `Character ${i} walk`,
        frames,
        frameRate: 20,
      });
    }

    // ! TEXT /////////////////
    this.penguinsLeftText = this.add
      .text(
        this.gw / 2 - 20,
        75,
        "Penguins left: " + this.penguinsToKillCount,
        {
          fontFamily: "LuckiestGuy",
          fontSize: "30px",
          color: "#FF0000",
          stroke: "#000000",
          strokeThickness: 5,
          shadow: { blur: 0, stroke: false, fill: false },
        }
      )
      .setOrigin(0.5);

    // ! SOUND ///////////////

    // ? TO wjebać do preload///////////
    this.load.audio("correctAnswer", "audio/correctAnswer.mp3");

 // ? TO już tam tego///////////
      this.bazookaShootAudio = this.sound.add('bazookaShoot')
      this.bazookaShootAudio.volume = 0.3

      // ? ///////////
      this.bazookaShootAudio.play()

      }

    // ! TIME ///////////////
      setTimeout(() => {
        // this.hudScene.healthBar.getDamage()
     }, 2000);

      //////////////////////////
     this.time.delayedCall(200, () => {

     })

     //////////////////////////
     setInterval(func,1000)

    /////////////////////////
    var timer = scene.time.addEvent({
      delay: 500,
      callback: callback,
      //args: [],
      callbackScope: thisArg,
      loop: true
    });

    // to to ssamo co wyzej tylko jakos lepiej zapisane
    this.time.addEvent({
      delay: 13000,
      callback: () => this.addBanner(),
      loop: true,
    });

    // ! TWEENS ///////////////

    this.tweens.add({
      targets: this.banner,
      ease: 'Power2',
      y: this.gh + this.banner.displayHeight,
      duration: 2500,
      flipX: true,
      hold: 2000,
      repeat: 2,
      repeatDelay: 1000,
      onComplete: () => {
        this.banner.destroy();
      },
      onUpdate: () => {
        console.log(1)
      },
      onStart: () => {
        console.log(1)
      },
      onYoyo: () => {
        console.log(1)
      },
      onRepeat: () => {
        console.log(1)
      },
    });

    // ? CUSTOM EASE
    ease: function (t) {
      return Math.pow(Math.sin(t * 3), 3);
  },

    // ? RUCH RYSOWANIA KWADRATU OD LEWEJ DO PRAWEJ W DÓŁ ITP
    this.timeline = this.tweens.timeline({

      tweens: [{
          targets: image,
          x: 600,
          ease: 'Power1',
          duration: 1000
          offset: '-=500', // starts 500ms before previous tween ends
      },
      {
          targets: image,
          y: 500,
          ease: 'Power1',
          duration: 1000
          offset: '-=500', // starts 500ms before previous tween ends
      },
      {
          targets: image,
          x: 100,
          ease: 'Power1',
          duration: 1000
          offset: '-=500', // starts 500ms before previous tween ends
      },
      {
          targets: image,
          y: 100,
          ease: 'Power1',
          duration: 1000
          offset: '-=500', // starts 500ms before previous tween ends
      }]

  });

// ? CHYBA JAKIEŚ WYCIĄGANIE WARTOŚCI Z TWEENA
    tween.getValue()

// ? UPDATE TWEENA
tween.updateTo('x', this.input.x, true);

// ? UPDATE DURATION
tween.timeScale -= 0.1;

// ? PAUSA I RESUME TWEENA
    this.input.on('pointerdown', function () {

      if (tween.isPlaying())
      {
          tween.pause();
      }
      else
      {
          tween.resume();
      }
  });

    // ! COLLISION ///////////////
        //? ///// DO ARACDE////////////

  //////////////////////////////
    this.physics.add.overlap(
      this.mainCar,
      obstacle,
      () => {
        if (this.isGameLost) return;

      }),

  /////////////////////////
    this.physics.add.collider(this.player, junk);

// ! BUTTON ///////////////

onClick(cb) {
  this.on("pointerdown", () => {
    this.setScale(0.9);
    cb();
  }).on("pointerup", () => this.setScale(1));

  return this;
}

     // ! SCENE ///////////////
    //odwołanie do sceny jak trzeba się do niej odwołać po jakimś czasie (po zrobieni creatów)
     this.hudScene = this.scene.get('HudScene');

    // odwołanei do sceny w trzeba się do niej odwołać podczas robienia creatów
     this.hudScene.events.on("create", )

      this.scene.start("HudScene")

      // ! ALPHA ///////////
      //? ZNIKA CORAZ BARDZIEJ DO GÓRY
      sea.setAlpha(1, 1, 0, 0);

     // ! EMITTER (np padający śnieg) ///////////////

     addSnow() {
      this.particles = this.add.particles("snowFlake");
      this.particles.createEmitter({
        y: 0,
        x: { min: 100, max: this.gw + 300 },
        lifespan: 4000,
        speedY: { min: 100, max: 300 },
        speedX: { min: -100, max: -200 },
        scale: { start: 1.2, end: 0.2 },
        // quantity: 1,
        frequency: 50,
        blendMode: "ADD",
      });
    }

    // ! Imput Text ///////////////

//? wrzucić w preload
 this.load.plugin(
      "rexinputtextplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js",
      true
    );
    this.load.plugin(
      "rexninepatchplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexninepatchplugin.min.js",
      true
    );

//? to juz normlanie w create
    addInputText() {
      const inputbox = this.add.rexNinePatch({
        x: this.operation.container.x + this.operation.displayText.width / 2 + 90,
        y: 80,
        width: 160,
        height: 120,
        key: "inputBox",
        columns: [15, undefined, 15],
        rows: [10, undefined, 10],
      });

      console.log(this.operation.displayText.width);
      const inputText = this.add
        .rexInputText({
          x:
            this.operation.container.x +
            this.operation.displayText.width / 2 +
            170,
          y: 90,
          width: 300,
          height: 140,
          type: "textarea",
          placeholder: "",
          fontSize: "100px",
          fontFamily: "LuckiestGuy",
          color: "#ffffff",
          align: "left",
          maxLength: 2,
        })
        .resize(300, 140)
        .on("textchange", ({ text }) => {});
    }

    //! DODAWANIE RZĘDÓW I KOLUMN /////////

    addBeads() {
      for (let i = 0; i < this.bead.maxColumns; i++) {
        this.beads[i] = [];
        for (let j = 0; j < this.bead.maxRows; j++) {
          this.beads[i][j] = [];
          let x =
            this.x +
            this.bead.marginX +
            this.bead.slotWeight / 2 +
            i * (this.bead.slotWeight / 2 + this.bead.gridSpacingX);
          let y =
            this.y +
            this.bead.marginY +
            this.bead.slotHeight / 2 +
            j * (this.bead.slotHeight / 2 + this.bead.gridSpacingY);

          if (j / 5 === 0) {
            y = y - this.bead.headSpace;
          }
          const bead = new Bead(this.scene, x, y, this.sprite);
          this.beads[i][j] = bead;
          bead.column = i;
          bead.row = j;
          this.setBeadClickable(bead);
          if (bead.row % 5 === 0) {
            bead.move();
          }
        }
      }
    }

    // ! MOUSE ///////////////

//? MYSZKA ZNIKA Z KERANU
this.input.manager.canvas.style.cursor = "none";

//? MYSZKA ZNIKA Z KERANU I NIE MOZNA NIC KLIKAĆ

  this.input.on(
      "pointerdown",
      function (pointer) {
        console.log(this.input.mouse);
        this.input.mouse.requestPointerLock();
      },
      this
    );

//? PORUSZANIE MYSZKĄ PO EKRANIE Z CURSOREM JAKO IMAGE
this.input.on(
  "pointermove",
  function (pointer) {
    this.celownik.x = pointer.x;
    this.celownik.y = pointer.y;

    // Zapętlanie na ekranie
    this.celownik.x = Phaser.Math.Wrap(this.celownik.x, 0, this.gw);
    this.celownik.y = Phaser.Math.Wrap(this.celownik.y, 0, this.gh);
  },
  this
);

// ! FULL SCREEN ////////////////

// ? TO W METODACH
addFullScreenButton() {
  this.fullscreen = this.add
    .image(this.gw - 5, 5, "full-screen")
    .setOrigin(1, 0)
    .setScale(2)
    .setDepth(99999);
  this.fullscreen.setInteractive();

  this.fullscreen.on("pointerup", () => {
    console.log(this);
    this.scale.startFullscreen();
  });
}

//? TO W UPDATE
fullScreenVisible() {
  if (!this.scale.isFullscreen && !this.fullscreen.active) {
    this.fullscreen.setActive(true);
    this.fullscreen.setVisible(true);
  } else if (this.scale.isFullscreen && this.fullscreen.active) {
    this.fullscreen.setActive(false);
    this.fullscreen.setVisible(false);
  }
}

// ! DATA /////////////
// ? W CREATE
this.data.set('lives', 3);

// ? ODWOŁANIE TO
this.data.get('level'),

// ? DATA W OBIEKCIE
// ? W PRELOAD
const gem = this.add.image(300, 300, 'gem');

// ? W CREATE
 //  Store some data about this Gem:
 gem.setData({ name: 'Red Gem Stone', level: 2, owner: 'Link', 'gold': 50 });

// ? ODWOŁANIE
 gem.getData('name'),

// ? ZMIANA WARTOŚCI
gem.data.values.gold += 100;

//! CAMERA ///////////

this.cameras.main.startFollow(this.ship, true, 0.08, 0.08);

this.cameras.main.centerOn(0, 0);

this.cameras.main.setZoom(4);

// ? RUCH BOUNCE CAMERY
this.cameras.main.setBounds(0, 0, 3392, 100);

// ! DEPTH ///////////////

updateDepth(){
  this.enemy.forEach(entity => entity.characterContainer.setDepth(entity.characterContainer.body.y + entity.characterContainer.body.height))
  this.NPC.forEach(entity => entity.characterContainer.setDepth(entity.characterContainer.body.y + entity.characterContainer.body.height))
  this.player.characterContainer.setDepth(this.player.characterContainer.body.y + this.player.characterContainer.body.height)
}

    // ! Dodanie phasera z linku ///////////////

    <!DOCTYPE html>
<html>
  <head>
    <script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
  </head>
  <style>
  </style>
  <body>
    <div id="game"></div>
    <script src="./src/scenes/PlayScene.js"></script>
  </body>
</html>

// ! DODANIE CZCIONKI ///////////////

//? Po pierwesze wklej ten plik txt

<!DOCTYPE html>
<html>
  <head>
  </head>
  <style>
    @font-face {
      font-family: "LuckiestGuy";
      src: url("/src/LuckiestGuy.ttf") format("truetype");
    }
    * {
      font-family: "LuckiestGuy";
    }
  </style>
  <body>
    <div id="game"></div>
    <script src="./src/scenes/PlayScene.js"></script>
    <script src="./src/index.js"></script>
  </body>
</html>

// ! FRONTEND ///////////////

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tenis Gra JavaScript</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: darkgray;
        }

   canvas {border: 3px solid #fff
   }
    </style>
</head>
<>
    <div></div>
    <canvas></canvas>
    <script></script>

    // ! PRZESUWANIE OBIEKTU MYSZKĄ ///////////////
    //? To akurat jest metoda jakiejs klasy
    moveable(){
        this.windowContainer.setSize(200, 200);
        this.windowContainer.setInteractive()
        this.scene.input.setDraggable(this.windowContainer);
        this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    }

// ! SKRÓTY ///////////////
this.entity.character.flipX ? this.entity.x : this.entity.x + 10





















// let score = 0;
// let bestScore = Number(localStorage.getItem("bestScore")) || 0;

class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

    this.scene.launch("HudScene");
    this.hudScene = this.scene.get("HudScene");

    this.backgroundParts = [];
    this.platforms = [];
    this.platformsSTartQuantity = 15;
    this.maxNumberOfPlatforms = 200;
    this.actualNumberOfPlatforms = this.platformsSTartQuantity;
    this.blockBottleCollision = false;
    this.platformOverlap = false;

    this.selectedSkin = "Character 2";

    this.addBackground();
    this.addPlayer();
    this.addStartPlatforms();
    // this.addStartBottles();

    this.setCamera();

    this.hudScene.events.on("create", () => {
      this.player.healthBar = this.hudScene.healthBar;
    });
    this.player.setCheckCollision();
    this.handleInputs = new HandleInputs(this);
  }

  update() {
    this.addNextPlatforms();

    if (this.player.body.touching.down) {
      this.player.canJump = true;
      this.platformOverlap = true;
    } else {
      this.platformOverlap = false;
      this.player.canJump = false;
      this.player.stop();
    }

    this.checkPlayerFallDown();

    this.handleInputs.handleMovement();
  }

  addBackground() {
    for (let i = 0; i <= 9; i++) {
      let bg = this.add.image(0, 3659 * i, `bg-${i}`).setOrigin(0, 0);

      this.backgroundParts.push(bg);
    }
    this.backgroundWidth = this.gw;

    this.backgroundHeight =
      this.backgroundParts[this.backgroundParts.length - 1].height;
    this.backgroundY = this.backgroundParts[this.backgroundParts.length - 1].y;
  }

  addPlayer() {
    this.player = new Player(
      this,
      this.gw / 2,
      this.backgroundY + this.backgroundHeight - 290,
      this.selectedSkin
    );
  }

  addStartPlatforms() {
    for (let i = 0; i <= this.platformsSTartQuantity; i++) {
      this.addPlatform(i);
    }
    this.setPlatformsX(0);
    this.setFirstPlatform();
  }

  addNextPlatforms() {
    if (this.actualNumberOfPlatforms >= this.maxNumberOfPlatforms) return;
    if (this.player.y <= this.platforms[this.platforms.length - 10].y) {
      this.addPlatform(this.actualNumberOfPlatforms + 1);
      this.setPlatformsX(this.actualNumberOfPlatforms);
      this.actualNumberOfPlatforms += 1;
      console.log(this.actualNumberOfPlatforms);
    }
  }

  setFirstPlatform() {
    let firstPlatform = this.platforms[0];
    firstPlatform.x = this.gw / 2;
    firstPlatform.y = this.backgroundY + this.backgroundHeight - 100;
  }

  setPlatformsX(first) {
    for (let i = first; i <= this.platforms.length - 1; i++) {
      let randomNumber = Math.floor(Phaser.Math.Between(1, 2));

      let sign = null;

      switch (randomNumber) {
        case 1:
          sign = "+";
          break;
        case 2:
          sign = "-";
          break;
      }

      if (i === this.platforms.length - 1) return;

      let reduceX = this.getReduceX(i);

      // console.log(reduceX);

      if (sign === "+") {
        this.platforms[i + 1].x = this.platforms[i].x + 400 - reduceX;
        if (this.platforms[i + 1].x >= this.gw - 100 - reduceX * 10) {
          this.platforms[i + 1].x = this.platforms[i].x - 500 - reduceX;
        }
      }

      if (sign === "-") {
        this.platforms[i + 1].x = this.platforms[i].x - 700 - reduceX;
        if (this.platforms[i + 1].x <= 100 + reduceX * 10) {
          this.platforms[i + 1].x = this.platforms[i].x + 400 - reduceX;
        }
      }

      this.addGoats(this.platform[i + 1]);
    }
  }

  getReduceX(i) {
    if (this.player.y >= this.backgroundParts[1].y) {
      return 0.5 * i;
    }
    return 0;
  }

  addPlatform(i) {

    





    const platform = new Platform(
      this,
      this.gw / 2,
      this.backgroundY + this.backgroundHeight - (100 + 0.3 * i) * i - 100
    );

    this.platforms.push(platform);
    this.physics.add.overlap(this.player, platform, () => {
      if (!this.platformOverlap) return;
      this.player.restartPositionX = platform.x;
      this.player.restartPositionY = platform.y;
    }),
      this.physics.add.collider(this.player, platform);
  }

  setCamera() {
    this.cameras.main.setBounds(
      0,
      0,
      this.gw,
      this.backgroundY + this.backgroundHeight
    );
    this.cameras.main.startFollow(this.player);
  }

  checkPlayerFallDown() {
    if (this.player.isFellDown(this.backgroundY + this.backgroundHeight)) {
      if (this.player.isDead()) {
        this.scene.stop();
        this.scene.start("DeadScene");
        return;
      }

      this.player.getHurt();
      this.player.restartPosition();
    }
  }

  addGoat(platform) {
    let goat = new Obstacle(this, platform.body.x, platform.body.y, "goat");
    console.log(platform.body.x);

    if (goat.x >= this.gw / 2) {
      goat.flipX();
    }

    this.physics.add.overlap(
      this.player,
      goat,
      () => {
        if (this.player.isImmortal) return;
        console.log("goat collision");
        if (this.player.isDead()) {
          this.scene.stop();
          this.scene.start("DeadScene");
          return;
        }
        this.player.getHurt();
        this.player.healthBar.getDamage(() => {
          console.log("take life");
        });
      },
      undefined,
      this
    );
  }

  addGoats(platform) {
    let randomNumber = Math.floor(Phaser.Math.Between(0, 20));
    if (randomNumber === 1) {
      this.addGoat(platform);
    }
  }

  addBottle() {
    let bottle = new PowerUp(
      this,
      this.gw / 2 - 200,
      this.backgroundY + this.backgroundHeight - 290,
      "bottle"
    );

    this.physics.add.overlap(
      this.player,
      bottle,
      () => {
        console.log("bottle collision");
        bottle.destroy();
        this.player.healthBar.heal();
      },
      undefined,
      this
    );
  }

  addStartBottles() {
    this.addBottle();
  }

  // this.player.healthBar.getDamage(() => {
  //   this.scene.start("DeadScene");
  //   // AJAX REQUEST HERE
  //   // this.score
  // });
}
