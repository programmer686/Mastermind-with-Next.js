import styles from '@/styles/GameBoard.module.css'
import PastPlay from './PastPlay'
import GamePlay from './GamePlay'
import { useState } from 'react'
import StartScreen from './StartScreen'

export default function GameBoard() {
    const [userInput, setUserInput] = useState("")
    const [toManyCharacters, setToManyCharacters] = useState(false);
    function handleInput(e) {
        const {value} = e.target
        console.log(value)
        if (value.length > 4) {
            
            setToManyCharacters(true)
        } else {
            setToManyCharacters(false)
        }
        
    }


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