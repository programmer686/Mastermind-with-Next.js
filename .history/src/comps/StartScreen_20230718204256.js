import styles from '@/styles/StartScreen.module.css'

export default function StartScreen(props) {
    return (
        <main className={styles.startscreen__body}>
            <p className={styles.startscreen__game_name}>Mastermind Game</p>
            <button onClick={props.handleStart} className={styles.startscreen__play_button}>Play Game</button>
            <div className={styles.startscreen__game_fules_container}>
                <ul >
                    <h1 className={styles.startscreen__game_fules_li}>Game play</h1>
                    <li className={styles.startscreen__game_fules_li}>a random code will be generated at the start of the game</li>
                    <li className={styles.startscreen__game_fules_li}>You have 10 turns to guess the secret code</li>
                    <li className={styles.startscreen__game_fules_li}>Every guess you make will be stored so you can reference it</li>
                    <li className={styles.startscreen__game_fules_li}>You win if you guess the code before you run out of turns</li>
                    <li className={styles.startscreen__game_fules_li}>If you do not then you lose</li>
                    <p><u>Dev notes</u><br/>
                    The input field is configured to only accept four numerical characters at a time
                    </p>
                </ul>
            </div>
        </main>
    )
}