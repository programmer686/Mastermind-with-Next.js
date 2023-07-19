import styles from '@/styles/StartScreen.module.css'

export default function StartScreen() {
    return (
        <main className={styles.startscreen__body}>
            <p className={styles.startscreen__game_name}>Mastermind Game</p>
            <button className={styles.startscreen__play_button}>Play Game</button>
        </main>
    )
}