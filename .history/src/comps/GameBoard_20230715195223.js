import styles from '@/styles/GameBoard.module.css'
import PastPlay from './PastPlay'
import GamePlay from './GamePlay'
import { useState } from 'react'
import StartScreen from './StartScreen'

export default function GameBoard() {
    const [userInput, setUserInput] = useState("")
    let toManyCharacters = ""
    function handleInput(e) {
        const {value} = e.target
        if (value.length > 4) {
            toManyCharacters = "You can only enter four characters at a time"
            
        }
    }

  
console.log(toManyCharacters)
    return (
        <main>
            <div className={styles.GameBoard__header}>
                <h1 className={styles.GameBoard__name}>Game Board</h1>
            </div>
            <div className={styles.GameBoard__body}>
                <PastPlay/>
                <GamePlay handleInput={handleInput} toManyCharacters={toManyCharacters}/>
            </div>
        </main>
    )
}