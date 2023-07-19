import styles from '@/styles/GamePlay.module.css'

export default function GamePlay(props) {
    function clearText() {
        if (props.toManyCharacters) {
            textarea.value = "";
        }
    }

    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <textarea onChange={props.handleInput}/>
            {props.toManyCharacters ? clearText(): <></>}
        </main>
    )
}