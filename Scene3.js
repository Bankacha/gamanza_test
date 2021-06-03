class Scene3 extends Phaser.Scene {
    constructor() {
        super("secondAnimation");
    }

    preload() {
        this.load.image('background', 'assets2/main-bg.png')

        this.load.atlas('stars', 'assets2/star.png', 'star.json')
    }

    create() {
        this.scene.start('animate');

        this.frameNames = this.textures.get('stars').getFrameNames();
        console.log(this.frameNames)
    }

}