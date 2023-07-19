import styles from '@/styles/StartScreen.module.css'

export default function StartScreen(props) {
    return (
        <main className={styles.startscreen__body}>
            <p className={styles.startscreen__game_name}>Mastermind Game</p>
            <button onClick={props.handleStart} className={styles.startscreen__play_button}>Play Game</button>
            <div>
                <p>Game play</p>
                <ul>
                    <li>a random code will be generated at the start of the game</li>
                    <li>You have 10 turns to guess the secret code</li>
                    <li>Every guess you make will be stored so you can reference it</li>
                    <li>You win if you guess the code before you run out of turns</li>
                    <li>If you do not then you lose</li>
                </ul>
            </div>
        </main>
    )
}