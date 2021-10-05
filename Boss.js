/**
 * Monstruo final al que tenemos que destruir
 */
class Boss extends Opponent {

    constructor(game) {
        const bossImageDead = FINAL_BOSS_PICTURE_DEAD,
            bossSpeed = FINAL_BOSS_SPEED,
            bossImage = FINAL_BOSS_PICTURE;

        super(game,  bossImage, bossImageDead, bossSpeed);

        this.myImageDead = bossImageDead;
        this.speed = bossSpeed;
        this.image.src = bossImage;

    }
    /**
     * Mata al boss final y termina el juego
     */
    collide() {
        super.collide();
        //this.game.endGame();

    }
}
