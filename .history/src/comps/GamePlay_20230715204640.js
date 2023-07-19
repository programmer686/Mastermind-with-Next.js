import styles from '@/styles/GamePlay.module.css'

export default function GamePlay(props) {
    let textarea = document.getElementById('textarea')
    function handleChange() {
        

        if (props.toManyCharacters) {
            textarea.value = "";
        }
    }

    document.getElementById('textarea').addEventListener(onchange, handleChange)
    
    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <textarea id="textarea" onChange={props.handleInput}/>
            {props.toManyCharacters ? <p className={styles.GamePlay__error}>To many characters</p> : <></>}
        </main>
    )
}