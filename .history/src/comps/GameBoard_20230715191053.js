import styles from '@/styles/GameBoard.module.css'

export default function GameBoard() {
    return (
        <main>
            <div className={styles.GameBoard__header}>
                <h1 className={styles.GameBoard__name}>Game Board</h1>
            </div>
        </main>
    )
}