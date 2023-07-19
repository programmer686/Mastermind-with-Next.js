import styles from '@/styles/GameBoard.module.css'
import PastPlay from './PastPlay'
import GamePlay from './GamePlay'
import { useState } from 'react'

export default function GameBoard() {
    const [userInput, setUserInput] = useState("")

    function handleInput(e) {
        const {value} = e.target
        if (value.length > 4) {
            return (
                <p className={styles.GameBoard__name}>To many characters</p>
            )
        }
    }

  

    return (
        <main>
            <div className={styles.GameBoard__header}>
                <h1 className={styles.GameBoard__name}>Game Board</h1>
            </div>
            <div className={styles.GameBoard__body}>
                <PastPlay/>
                <GamePlay handleInput={handleInput}/>
            </div>
        </main>
    )
}