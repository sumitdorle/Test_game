var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var tank1;
var tank2;
var bullet;
var cursors;


function preload() {
    game.load.image('tank', 'assets/tank.png', 120, 120);
    game.load.image('tank2', 'assets/tank2.png', 120, 120);
    game.load.image('bullet', 'assets/bullet.png', 120, 120);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    tank1 = game.add.sprite(0, 0, 'tank');
    tank1.inputEnabled = true;
    bullet = game.add.sprite(0, 0, 'bullet');
    game.physics.arcade.enable(tank1);
    
    tank2 = game.add.sprite(400, 0, 'tank2');

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
    
    if (bullet.body.collideWorldBounds){
        bullet.kill(0);
    }
}

// function removeBullet () {
//     if (bullet.body.collideWorldBounds){
//             this.bullet.kill();
//     this.camera.follow();
//     this.add.tween(this.camera).to( { x: 0 }, 1000, "Quint", true, 1000);
//     }    
// }




function movebullet() {
    game.camera.follow();
    game.physics.arcade.moveToPointer(bullet, 400);
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
