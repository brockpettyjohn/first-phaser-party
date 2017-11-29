const game = new Phaser.Game(900, 526, Phaser.AUTO)
const StateMain = {
    preload: function () {
        this.load.image('background', 'img/forest.png')
        this.load.image('mainGuy', 'img/gorilla.png')
    },
    create: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true
        this.speed = 5
        this.cursors = this.game.input.keyboard.createCursorKeys()
        this.background = placeSprite(0, 0, 'background')
        this.mainGuy = placeSprite(100, 100, 'mainGuy')
        this.mainGuy.anchor.setTo(0.5, 0.5)
        this.mainGuy.scale.setTo(0.5)
        this.mainGuy.inputEnabled = true
        this.mainGuy.input.onHold = true
        this.mainGuy.events.onInputDown.add(this.houdini)
        this.background.inputEnabled = true
        this.background.input.onHold = true
        this.background.events.onInputDown.add(() => this.doesEventWork(this.input._x, this.input._y), this)
    },
    update: function () {
        const gorillaX = this.mainGuy.x
        const gorillaY = this.mainGuy.y

        if (this.cursors.up.isDown && gorillaY > this.mainGuy.height / 2 + 2) {
            this.mainGuy.y -= this.speed
        }
        if (this.cursors.down.isDown && gorillaY < this.world.bounds.height - this.mainGuy.height / 2 - 2) {
            this.mainGuy.y += this.speed
        }
        if (this.cursors.right.isDown && gorillaX < 2 + this.world.bounds.width - this.mainGuy.width / 2 - 2) {
            this.mainGuy.x += this.speed
        }
        if (this.cursors.left.isDown && gorillaX > this.mainGuy.width / 2 + 2) {
            this.mainGuy.x -= this.speed
        }
        this.mainGuy.angle += 0
        this.mainGuy.x += 0
        this.mainGuy.y += 0

    },
    doesEventWork: function (x, y) {
        this.mainGuy.x = x
        this.mainGuy.y = y
    },
    houdini: function () {
        let hello = true
        this.mainGuy = !hello
        console.log(this.mainGuy)
    }
}

function placeSprite(x, y, name) {
    var sprite = game.add.sprite(x, y, name)
    return sprite
}


game.state.add('StateMain', StateMain)
game.state.start('StateMain')