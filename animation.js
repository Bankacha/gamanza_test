// var height = 1920 * 0.5;
// var width = 1080 * 1.5;

let config = {
    width: 1920,
    height: 1080,
    backgroundColor: 11111,
    scene: [Scene3, Scene4],//,[Scene1, Scene2]
    pixelArt: true,
    // scale: {
    //     mode: Phaser.Scale.ScaleModes.FIT,
    //     // autoCenter: Phaser.Scale.Center.CENTER_BOTH
    // }
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
}

window.onload = function () {
    var animation = new Phaser.Game(config);
}
