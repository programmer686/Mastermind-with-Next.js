import styles from '@/styles/GamePlay.module.css'

export default function GamePlay(props) {
    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <textarea onChange={props.handleInput}/>
            {props.toManyCharacters ? <p className={styles.GamePlay__error}>{props.toManyCharacters}</p> : <></>}
        </main>
    )
}