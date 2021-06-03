class Scene2 extends Phaser.Scene {
    constructor() {
        super("animate");
    }

    create() {
        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);


        this.shiningStars = this.add.sprite(0, 0, 'shiningStars')
        this.shiningStars.setOrigin(0, 0);
        // this.shiningStars.displayHeight = 1920;
        // this.shiningStars.scaleX = this.shiningStars.scaleY;
        // this.shiningStars.alpha = 0.8;


        this.anims.create({
            key: 'shine_landscape',
            frames: [
                { key: 'shiningStars', frame: 'landscape_01' },
                { key: 'shiningStars', frame: 'landscape_02' },
                { key: 'shiningStars', frame: 'landscape_03' },
                { key: 'shiningStars', frame: 'landscape_04' },
                { key: 'shiningStars', frame: 'landscape_05' },
            ],
            frameRate: 28,
            repeat: -1
        });

        this.anims.create({
            key: 'shine_portrait',
            frames: [
                { key: 'shiningStars', frame: 'portrait_01' },
                { key: 'shiningStars', frame: 'portrait_02' },
                { key: 'shiningStars', frame: 'portrait_03' },
                { key: 'shiningStars', frame: 'portrait_04' },
                { key: 'shiningStars', frame: 'portrait_05' },
            ],
            frameRate: 20,
            repeat: -1
        });

        if (this.scale.orientation === 'portrait-primary' || config.width < 1100) {
            this.shiningStars.displayHeight = 1920;
            this.shiningStars.scaleX = this.shiningStars.scaleY;
            this.shiningStars.alpha = 0.5;
            this.shiningStars.play('shine_portrait')
        } else if (this.scale.orientation === 'landscape-primary') {
            this.shiningStars.displayHeight = 1920;
            this.shiningStars.scaleX = this.shiningStars.scaleY;
            this.shiningStars.alpha = 0.5;
            this.shiningStars.play('shine_landscape')
        }

    }
}



        // let bg=this.add.image(0,0,'background');

        // bg.displayHeight=this.sys.game.config.height;
        // bg.scaleX=bg.scaleY;

        // bg.y=this.sys.game.config.height/2;
        // bg.x=this.sys.game.config.width/2

        // bg.x=bg.displayWidth*0.5;