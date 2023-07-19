import styles from '@/styles/GameBoard.module.css'
import PastPlay from './PastPlay'

export default function GameBoard() {
    return (
        <main>
            <div className={styles.GameBoard__header}>
                <h1 className={styles.GameBoard__name}>Game Board</h1>
            </div>
            <div className={styles.GameBoard__body}>
                <PastPlay/>
            </div>
        </main>
    )
}