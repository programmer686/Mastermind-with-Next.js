import styles from '@/styles/GamePlay.module.css'

export default function GamePlay(props) {
    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <textarea onChange={props.handleInput}/>
            {props.toManyCharacters.length > 4 ? ()=>{return (<p className={styles.GamePlay__title}>Only four characters allowed</p>)} : <></>}
        </main>
    )
}