class ThrowableObject extends MovableObject {


    IMAGES_BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    constructor(x, y) {
        super().loadImage(this.IMAGES_BOTTLE_ROTATION[0])
        this.loadImages(this.IMAGES_BOTTLE_ROTATION)
        this.x = x
        this.y = y
        this.height = 60
        this.width = 50
        this.trow()
    }

    trow() {
        this.speedY = 30
        this.applyGravity()

        setInterval( () => {
            this.playAnimation(this.IMAGES_BOTTLE_ROTATION)
            this.x += 10
        }, 25)
    }

    
}