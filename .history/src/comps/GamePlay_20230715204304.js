import styles from '@/styles/GamePlay.module.css'

export default function GamePlay(props) {
    function handleChange() {
        let textarea = document.getElementById('textarea')

        if (props.toManyCharacters) {
            textarea.value = "";
        }

       props.handleInput(textarea.value)
    }
    
    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <textarea id="textarea" onChange={handleChange}/>
            {props.toManyCharacters ? <p className={styles.GamePlay__error}>To many characters</p> : <></>}
        </main>
    )
}