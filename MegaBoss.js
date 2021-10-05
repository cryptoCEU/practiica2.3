/**
 * Monstruo final al que tenemos que destruir
 */
class MegaBoss extends Opponent {

    constructor(game) {
        const megabossImageDead = FINAL_MEGABOSS_PICTURE_DEAD,
            megabossSpeed = FINAL_MEGABOSS_SPEED,
            megabossImage = FINAL_MEGABOSS_PICTURE;

        super(game,  megabossImage, megabossImageDead, megabossSpeed);

        this.myImageDead = megabossImageDead;
        this.speed = megabossSpeed;
        this.image.src = megabossImage;
        setTimeout(() => this.shoot(), 500 + getRandomNumber(2500));

    }
    /**
     * Mata al boss final y termina el juego
     */
    collide() {

        super.collide();
        this.game.endGame();

    }
}
