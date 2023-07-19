import styles from '@/styles/GamePlay.module.css'

export default function GamePlay(props) {
    let textarea = document.getElementById('textarea')
    
    function clearTextarea() {
        if (props.toManyCharacters) {
            textarea.value = "";
        }
    }
    
    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <form>
                <label>Enter your guess</label>
                <input ></input>
            </form>
            {props.toManyCharacters ? <p className={styles.GamePlay__error}>To many characters</p> : <></>}
            <button></button>
        </main>
    )
}