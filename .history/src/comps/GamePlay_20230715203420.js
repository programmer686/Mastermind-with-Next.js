import styles from '@/styles/GamePlay.module.css'

export default function GamePlay(props) {
    function clearText() {

    }

    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <textarea onChange={props.handleInput} {...clearText()}/>
            {props.toManyCharacters ? <p className={styles.GamePlay__error}>To many characters</p> : <></>}
        </main>
    )
}