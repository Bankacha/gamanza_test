class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootAnimation");
    }

    preload() {
        // let measure = this.sys.game.canvas;
        // let {style} = measure;

        // console.log(measure)
        // console.log(config.width)
        // console.log(style.width)
        
        
        if (this.scale.orientation === 'portrait-primary' || config.width < 1100) {
            this.load.image('background', 'assets/main-bg-portrait.png')
            console.log('portrait img')
        } else if (this.scale.orientation === 'landscape-primary') {
            this.load.image('background', 'assets/main-bg.png')
            console.log('landscape img')
        }

        // this.load.image('background', 'assets/main-bg.png')

        this.load.atlas('shiningStars', 'assets/backgroundAnim.png', 'backgroundAnim.json')
    }



    create() {

        

        this.scene.start('animate');

        var frameNames = this.textures.get('shiningStars').getFrameNames();
        console.log(frameNames)
    }
    
}