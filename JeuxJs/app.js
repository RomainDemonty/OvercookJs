var config = {
  type: Phaser.AUTO,
  width: 670,
  height: 640,
  scene: 
  {
    preload: preload,
    create: create,
    update: update,
  },
  physics: 
  {
    default: "arcade",
    arcade: 
    {
      gravity: { y: 0 },
      debug: true,
    },
  }
};

var player;
var cursors;
var game = new Phaser.Game(config);

var Etat;

//angle de rotation personnage
var angle;

//Bordure de la map
var bounds;

//Les zones où les interactions sont possible
const Assietes = new Phaser.Geom.Rectangle(90, 550, 15, 15);
const Evier = new Phaser.Geom.Rectangle(100, 375, 5, 1);
const Couteau = new Phaser.Geom.Rectangle(100, 175, 20, 20);
const Poubelle = new Phaser.Geom.Rectangle(100, 290, 5, 1);
const Frigo = new Phaser.Geom.Rectangle(290, 100, 70, 20);
const Plats1 = new Phaser.Geom.Rectangle(450, 350, 5, 1);
const Plats2 = new Phaser.Geom.Rectangle(450, 500, 5, 1);
const Poele1 = new Phaser.Geom.Rectangle(235, 550, 5, 1);
const Poele2 = new Phaser.Geom.Rectangle(325, 550, 5, 1);


/*-----------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------*/ 
/*-----------------------------------------------------------------------------------*/ 

function preload() {
  this.load.image("Fond", "./Image/Cuisine2.jpg");
  //this.load.image("ground", "");
  this.load.spritesheet("mec", "./Image/SpriteBonhomme.png", 
  {
    frameWidth: 96, //Taille de l'image
    frameHeight: 96,
  });
}

/*-----------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------*/ 
/*-----------------------------------------------------------------------------------*/ 

function create() {
  //Ajoute le fond
  this.add.image(340, 320, "Fond");

  //Ajoute le mec au millieu
  player = this.physics.add.sprite(290, 320, "mec");
 
  
  player.setOrigin(0.39, 0.5);
  player.setSize(61, 61);
  var radius = 31;
  player.body.setCircle(radius, 7, 16);

  player.setBounce(0); //Rebondissement
  player.setCollideWorldBounds(true);

  //var spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  //Les différentes annimations
  this.anims.create({
    key: "Vide",
    frames: [{ key: "mec", frame: 0 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "Poulet",
    frames: [{ key: "mec", frame: 1 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "Oeuf",
    frames: [{ key: "mec", frame: 2 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "Salade",
    frames: [{ key: "mec", frame: 3 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "SaladeCoupe",
    frames: [{ key: "mec", frame: 4 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "Steack",
    frames: [{ key: "mec", frame: 5 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "Pain",
    frames: [{ key: "mec", frame: 6 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoeleVide",
    frames: [{ key: "mec", frame: 7 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoelePouletCru",
    frames: [{ key: "mec", frame: 8 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoelePouletCuit",
    frames: [{ key: "mec", frame: 9 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoelePouletCrame",
    frames: [{ key: "mec", frame: 10 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoeleOeufcru",
    frames: [{ key: "mec", frame: 11 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoeleOeufcuit",
    frames: [{ key: "mec", frame: 12 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoeleOeufCrame",
    frames: [{ key: "mec", frame: 13 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoeleSteackCru",
    frames: [{ key: "mec", frame: 14 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoeleSteackCuit",
    frames: [{ key: "mec", frame: 15 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoeleSteackCrame",
    frames: [{ key: "mec", frame: 16 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "PoeleSale",
    frames: [{ key: "mec", frame: 17 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "MecCoca",
    frames: [{ key: "mec", frame: 18 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "MecFanta",
    frames: [{ key: "mec", frame: 19 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "MecEau",
    frames: [{ key: "mec", frame: 20 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssieteVide",
    frames: [{ key: "mec", frame: 21 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssieteOeufCru",
    frames: [{ key: "mec", frame: 22 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssieteOeufCuit",
    frames: [{ key: "mec", frame: 23 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssieteOeufCrame",
    frames: [{ key: "mec", frame: 24 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePain",
    frames: [{ key: "mec", frame: 25 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePainSteakCru",
    frames: [{ key: "mec", frame: 26 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePainSteakCruSalade",
    frames: [{ key: "mec", frame: 27 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePainSteakCuit",
    frames: [{ key: "mec", frame: 28 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePainSteakCuitSalade",
    frames: [{ key: "mec", frame: 29 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePainSteakCrame",
    frames: [{ key: "mec", frame: 30 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePainSteakCrameSalade",
    frames: [{ key: "mec", frame: 31 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePouletCru",
    frames: [{ key: "mec", frame: 32 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePouletCruSalade",
    frames: [{ key: "mec", frame: 33 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePouletCuit",
    frames: [{ key: "mec", frame: 34 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePouletCuitSalade",
    frames: [{ key: "mec", frame: 35 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePouletCrame",
    frames: [{ key: "mec", frame: 36 }],
    frameRate: 1,
  });

  this.anims.create({
    key: "AssietePouletCrameSalade",
    frames: [{ key: "mec", frame: 37 }],
    frameRate: 1,
  });

  //Permet d'avoir une intéraction avec le clavier
  cursors = this.input.keyboard.createCursorKeys();
  //permet de creer l'environement de jeux
  bounds = new Phaser.Geom.Rectangle(65, 70, 420, 510);
  //player.body.setSize(36, 36);
  player.body.setBoundsRectangle(bounds);

  //Définir l'état de base
  Etat = 0;

  // Créer un objet Graphics
  const graphics = this.add.graphics();
  // Définir la couleur de remplissage à rouge
  graphics.fillStyle(0xff0000);
  // Dessiner un rectangle rempli de couleur dans la zone atteignable
  
  graphics.fillRectShape(Assietes);
  graphics.fillRectShape(Evier);
  graphics.fillRectShape(Couteau);
  graphics.fillRectShape(Poubelle);
  graphics.fillRectShape(Frigo);
  graphics.fillRectShape(Poele1);
  graphics.fillRectShape(Poele2);
  graphics.fillRectShape(Plats1);
  graphics.fillRectShape(Plats2);
  
  //graphics.fillRectShape(player);
}

/*-----------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------*/ 
/*-----------------------------------------------------------------------------------*/ 

function update() {
  //Calcul des zones
  if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), Evier)) 
  {
    //if(cursors.space.isDown && Etat == 17)
    //{
        player.anims.play("PoeleVide", true);
        Etat = 5;
    //}
  }
  else
  {
    player.anims.play("Vide", true);
    Etat = 1;
  }

  if(Etat != 5)
  {

  }
  else 
  {
    if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), Assietes)) 
    {
      if(cursors.space.isDown && Etat == 0)
      {
        player.anims.play("AssieteVide", true);
        Etat = 21;
      }
    } 
    else 
    {
      if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), Couteau)) 
      {
        //player.anims.play("Salade", true);
      } 
      else 
      {
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(),Poubelle)) 
        {
          if(cursors.space.isDown && Etat != 0)
          {
            //console.log(Etat)
            if(Etat > 7 && Etat < 18)
            {
              player.anims.play("PoeleSale", true);
              Etat = 17;
            }
            else{
              player.anims.play("Vide", true);
              Etat = 0;
              player.anims.play("Vidzade", true);
            }
          }
        } 
        else 
        {
          if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(),Frigo)) 
          {
            if(cursors.space.isDown && Etat == 0)
            {
              player.anims.play("Steack", true);
              Etat = 5;
            }  
          } 
          else 
          {
            if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(),Plats1)) 
            {
              //player.anims.play("AssietePouletCuit", true);
            } 
            else 
            {
              if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(),Plats2)) 
              {
                //player.anims.play("AssietePouletCuit", true);
              } 
              else
              {
                if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(),Poele1)) 
                {
                  if(cursors.space.isDown )//Pas juste
                  {
                      player.anims.play("PoeleSteackCru", true);
                      Etat = 14;
                  }
                } 
                else 
                {
                  if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(),Poele2)) 
                  {
                    //player.anims.play("PoeleSteakCrame", true);
                  } 
                }
              }
            }
          }
        }
      }
    }
  }

  //Deplacement
  if (cursors.left.isDown && cursors.up.isDown) 
  {
    //left-up
    player.setVelocityX(-160);
    player.setVelocityY(-160);
    angle = 225;
    player.rotation = (angle * Math.PI) / 180;
  } 
  else 
  {
    if (cursors.right.isDown && cursors.up.isDown) 
    {
      //Right-up
      player.setVelocityX(160);
      player.setVelocityY(-160);
      angle = 315;
      player.rotation = (angle * Math.PI) / 180;
    } 
    else 
    {
      if (cursors.left.isDown && cursors.down.isDown) 
      {
        //Left-down
        player.setVelocityX(-160);
        player.setVelocityY(160);
        angle = 135;
        player.rotation = (angle * Math.PI) / 180;
      } 
      else 
      {
        if (cursors.right.isDown && cursors.down.isDown) 
        {
          //Right-down
          player.setVelocityX(160);
          player.setVelocityY(160);
          angle = 45;
          player.rotation = (angle * Math.PI) / 180;
        }
        else 
        {
          //Position des X
          if (cursors.left.isDown) 
          {
            player.setVelocityX(-160);
            angle = 180;
            player.rotation = (angle * Math.PI) / 180;
          } 
          else 
          {
            if (cursors.right.isDown) 
            {
              player.setVelocityX(160);
              angle = 0;
              player.rotation = (angle * Math.PI) / 180;
            } 
            else 
            {
              player.setVelocityX(0);
            }
          }

          //Position des Y
          if (cursors.up.isDown) 
          {
            player.setVelocityY(-160);
            angle = 270;
            player.rotation = (angle * Math.PI) / 180;
          } 
          else 
          {
            if (cursors.down.isDown) 
            {
              player.setVelocityY(160);
              angle = 90;
              player.rotation = (angle * Math.PI) / 180;
            } 
            else 
            {
              player.setVelocityY(0);
            }
          }
        }
      }
    }
  }
}
