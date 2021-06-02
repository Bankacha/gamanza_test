class Scene2 extends Phaser.Scene {
    constructor() {
        super("animate");
    }

    create() {
        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);

        this.shiningStars = this.add.sprite(0, 0, 'shiningStars')
        this.shiningStars.setOrigin(0, 0);
        this.shiningStars.displayHeight = 1920;
        this.shiningStars.scaleX = this.shiningStars.scaleY;
        this.shiningStars.alpha = 0.8;
        // this.shiningStars.

        this.anims.create({
            key: 'shine_landscape',
            frames: [
                { key: 'shiningStars',frame:'landscape_01' },
                { key: 'shiningStars',frame:'landscape_02' },
                { key: 'shiningStars',frame:'landscape_03' },
                { key: 'shiningStars',frame:'landscape_04' },
                { key: 'shiningStars',frame:'landscape_05' },
            ],
            frameRate: 200,
            repeat: -1
        });

        this.shiningStars.play('shine_landscape')
    }
}
