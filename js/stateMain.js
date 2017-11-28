const game = new Phaser.Game(900,526,Phaser.AUTO)
const StateMain = {
    preload: function(){
        this.load.image('background', 'img/forest.png')
        this.load.image('mainGuy', 'img/gorilla.png')
    },
    create: function(){
        this.background = this.game.add.sprite(0, 0, 'background')
        this.mainGuy = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'mainGuy')
        this.mainGuy.anchor.setTo(0.5, 0.5)
        this.mainGuy.scale.setTo(0.5)
    },
    update: function(){
        this.mainGuy.angle += 0.5
    }
}


game.state.add('StateMain', StateMain)
game.state.start('StateMain')