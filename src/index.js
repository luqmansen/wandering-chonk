import Phaser from "phaser";
import config from "./config/config"
import Boot from "./scenes/boot"
import Preload from "./scenes/preload"
import Menu from "./scenes/menu"
import Play from "./scenes/play"

class Game extends Phaser.Game{
    constructor() {
        super(config);

        this.scene.add('boot',Boot);
        this.scene.add('preload',Preload);
        this.scene.add('menu',Menu);
        this.scene.add('play',Play);
        this.scene.start('boot')

        this.VERSION = '0.0.1';
        this.IS_DEV = true;
        this.sound_on = true;
    }
}

window.onload = function(){
    window.game = new Game()
}