class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootAnimation");
    }

    preload() {
        this.load.image('background', 'assets/main-bg.png')

        this.load.atlas('shiningStars', 'assets/backgroundAnim.png', 'backgroundAnim.json')
    }

    create() {
        this.scene.start('animate');

        var frameNames = this.textures.get('shiningStars').getFrameNames();
        console.log(frameNames)
        // this.shiningStars = this.add.sprite(200,200, 'shiningStars')
    }
}