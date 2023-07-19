import styles from '@/styles/GamePlay.module.css'
import { useState } from 'react';

export default function GamePlay(props) {
    const [userInput, setUserInput] = useState("")
    
    function getUserValue() {
        let userInput = document.getElementById("user_input").value;
        setUserInput(userInput);
        console.log("Submited", userInput);
    }
    
    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <form>
                <label>Enter your guess</label>
                <input id="user_input" type="text"/>
                <input onClick={getUserValue} type="submit"/>
            </form>
            {props.toManyCharacters ? <p className={styles.GamePlay__error}>To many characters</p> : <></>}
            <button></button>
        </main>
    )
}