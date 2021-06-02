let config = {
    width: 1920,
    height: 1080,
    backgroundColor: 11111,
    scene: [Scene1, Scene2],
    // pixelArt: true
}

window.onload = function () {
    var animation = new Phaser.Game(config);
}