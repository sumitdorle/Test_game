var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var tank1;
var brick;
var cursors;

function preload() {
    game.load.image('tank', 'tank.png', 120, 120);
    //game.load.image('bricks', 'bricks.png', 120, 120);
}

function create() {
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    tank1 = game.add.sprite(0, 0, 'tank');
   
    // game.physics.arcade.enable(tank1);
    // //tank1.body.gravity.y = 8;
    // tank1.body.collideWorldBounds = true;
    // cursors = game.input.keyboard.createCursorKeys();
    // tank1.pivot.x = tank1.width * .5;
    // tank1.pivot.y = tank1.height * .5;
    
    //Adding target
    // game.physics.startSystem(Phaser.Physics.ARCADE);
    // brick = game.add.sprite(game.world.centerX, 0, 'bricks');
    // game.physics.arcade.enable(brick);
    // game.add.tween(brick).to({ x: 400 }, 1000, Phaser.Easing.Linear.None, true, 0);
   

    brick.body.collideWorldBounds = true;
}

function update() {







}

function moveTank(tank)
{
    tank.body.velocity.x = 0;
    tank.body.velocity.y = 0;
    
    if(cursors.up.isDown) {
      tank.body.velocity.y -= 50;
    }
    else if(cursors.down.isDown) {
      tank.body.velocity.y += 50;
    }
    if(cursors.left.isDown) {
      tank.body.velocity.x -= 50;
      tank.scale.x =1;
    }
    else if(cursors.right.isDown) {
      tank.body.velocity.x += 50;
      tank.scale.x =-1;
        
    }
}
