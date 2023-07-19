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
            <textarea id="textarea" onChange={props.handleInput}
            onKeyDown={clearTextarea}/>
            {props.toManyCharacters ? <p className={styles.GamePlay__error}>To many characters</p> : <></>}
        </main>
    )
}