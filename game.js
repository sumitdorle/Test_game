var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var tank1;
var tank2;
var bullet;
var bullets;
var cursors;
var positionX;
var positionY;

function preload() {
    game.load.image('tank', 'assets/tank.png', 120, 120);
    game.load.image('tank2', 'assets/tank2.png', 120, 120);
    game.load.image('bullet', 'assets/bullet.png', 120, 120);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    tank1 = game.add.sprite(0, 0, 'tank');
    game.physics.arcade.enable(tank1);
    tank1.inputEnabled = true;

    //bullet = game.add.sprite(0, 0, 'bullet');
    //game.physics.arcade.enable(bullet);
    //bullet.anchor.setTo(tank1.anchor.x/2, tank1.anchor.y/2);
    
    
//***************create bullet group**********************    
    
    //  Our ships bullets
    bullets = game.add.group();
    bullet = game.add.sprite(0, 0, 'bullet');

    //  All 40 of them
    bullets.createMultiple(40, 'bullet');
    // bullets.setAll('anchor.x', 0.5);
    // bullets.setAll('anchor.y', 0.5);
//***********************************************************    
    
    
    
    
    
    
    tank2 = game.add.sprite(400, 0, 'tank2');
    game.physics.arcade.enable(tank2);
    
    //game.physics.arcade.enable(tank1);
    tank1.body.collideWorldBounds = true;
    cursors = game.input.keyboard.createCursorKeys();
    tank1.pivot.x = tank1.width * .5;
    tank1.pivot.y = tank1.height * .5;
    
    
    //moving bullet to pointer
    game.physics.arcade.enable(bullet);
    game.camera.follow(bullet);
    game.input.onDown.add(movebullet, this);
    

}

function update() {
    moveTank(tank1);
    this.physics.arcade.collide(bullet, tank2, killTanker, null, this);
   
    if (bullet.body.collideWorldBounds){
        bullet.kill(0);
    }
    

    
    
}

function killTanker(){
    tank2.kill(0);
    bullet.kill(0);
}


// function fireBullet () {

//     if (game.time.now > bulletTime)
//     {
//         bullet = bullets.getFirstExists(false);

//         if (bullet)
//         {
//             bullet.reset(sprite.body.x + 16, sprite.body.y + 16);
//             bullet.lifespan = 2000;
//             bullet.rotation = sprite.rotation;
//             game.physics.arcade.velocityFromRotation(sprite.rotation, 400, bullet.body.velocity);
//             bulletTime = game.time.now + 50;
//         }
//     }

// }



function movebullet() {
    game.camera.follow();
    game.physics.arcade.moveToPointer(bullet, 600);
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
