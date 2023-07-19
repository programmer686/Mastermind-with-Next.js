import styles from '@/styles/GameBoard.module.css'
import PastPlay from './PastPlay'
import GamePlay from './GamePlay'
import { useState } from 'react'
import GetSecretCode from './GetSecretCode'

export default function GameBoard() {
    const secretCode = GetSecretCode();
    return (
        <main>
            <div className={styles.GameBoard__header}>
                <h1 className={styles.GameBoard__name}>Game Board</h1>
            </div>
            <div className={styles.GameBoard__body}>
                {/* <PastPlay playHistory={playHistory}/> */}
                <GamePlay code={secretCode}/>
            </div>
        </main>
    )

}