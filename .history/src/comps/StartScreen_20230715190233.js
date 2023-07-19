import styles from '@/styles/StartScreen.module.css'

export default function StartScreen(props) {
    return (
        <main className={styles.startscreen__body}>
            <p className={styles.startscreen__game_name}>Mastermind Game</p>
            <button onClick={props.handleStart} className={styles.startscreen__play_button}>Play Game</button>
        </main>
    )
}