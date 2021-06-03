class Scene4 extends Phaser.Scene {
    constructor() {
        super("animate");
    }

    create() {
        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);

        
        this.stars = this.add.sprite(0, 0, 'stars')
        this.stars.setOrigin(0, 0);

        var randomX = Phaser.Math.Between(0, config.width);
        var randomY = Phaser.Math.Between(0, config.height)

        // for(var i = 1; i < 7; i++) {
        //     this.stars = this.add.sprite(randomX, randomY, 'stars', `smallStars_${i}`);

        //     this.anims.create({
        //         key: 'shine_portrait',
        //         frames: [
        //             { key: 'stars', frame: `smallStars_${i}` },
        //             { key: 'stars', frame: `smallStars_${i}` },
        //             { key: 'stars', frame: `smallStars_${i}` },
        //             { key: 'stars', frame: `smallStars_${i}` },
        //         ],
        //         frameRate: 30,
        //         repeat: -1
        //     });
        // }


        // this.star1 = this.add.sprite(randomX, randomY, 'stars', 'smallStars_1')
        // this.star2 = this.add.sprite(randomX, randomY, 'stars', 'smallStars_2')
        // this.star3 = this.add.sprite(randomX, randomY, 'stars', 'smallStars_3')
        // this.star4 = this.add.sprite(randomX, randomY, 'stars', 'smallStars_4')
        // this.star5 = this.add.sprite(randomX, randomY, 'stars', 'smallStars_5')
        // this.star6 = this.add.sprite(randomX, randomY, 'stars', 'smallStars_0')


        // this.starsGroup = this.physics.add.group();
        // this.starsGroup.add(this.star1)
        // this.starsGroup.add(this.star2)
        // this.starsGroup.add(this.star3)
        // this.starsGroup.add(this.star4)
        // this.starsGroup.add(this.star5)
        // this.starsGroup.add(this.star6)

        this.anims.create({
            key: 'shine_portrait',
            frames: [
                { key: 'stars', frame: 'smallStars_1' },
                { key: 'stars', frame: 'smallStars_2' },
                { key: 'stars', frame: 'smallStars_3' },
                { key: 'stars', frame: 'smallStars_4' },
                { key: 'stars', frame: 'smallStars_5' },
                { key: 'stars', frame: 'smallStars_6' },
            ],
            frameRate: 5,
            repeat: -1
        });

        this.stars.displayHeight = 1920;
        this.stars.scaleX = this.stars.scaleY;
        this.stars.alpha = 0.9;
        this.stars.play('shine_portrait')

        // if (this.scale.orientation === 'portrait-primary' || config.width < 1100) {
        //     this.stars.displayHeight = 1920;
        //     this.stars.scaleX = this.stars.scaleY;
        //     this.stars.alpha = 0.5;
        //     this.stars.play('shine_portrait')
        // } else if (this.scale.orientation === 'landscape-primary') {
        //     this.stars.displayHeight = 1920;
        //     this.stars.scaleX = this.stars.scaleY;
        //     this.stars.alpha = 0.5;
        //     this.stars.play('shine_landscape')
        // }

    }

    randomize = () => {

    }

}