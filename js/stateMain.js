const game = new Phaser.Game(900,526,Phaser.AUTO)
const StateMain = {
    preload: function(){
        this.load.image('background', 'img/forest.png')
    },
    create: function(){
        this.background = this.game.add.sprite(0, 0, 'background')
    },
    update: function(){

    }
}


game.state.add('StateMain', StateMain)
game.state.start('StateMain')