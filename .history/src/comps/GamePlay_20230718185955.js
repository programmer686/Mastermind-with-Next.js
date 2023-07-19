import styles from '@/styles/GamePlay.module.css'
import { useState } from 'react';




export default function GamePlay(props) {
    const [userInput, setUserInput] = useState("")
    
    function getUserValue(event) {
        
        
        if (!(/[a-zA-Z]/gi.test(event.target.value)) && event.target.value.length <= 4) {
            setUserInput(event.target.value);
        }  
    }

    
  function submitUserInput(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        console.log(userInput);
        setUserInput(userInput);
    }
  };
    
    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <form>
                <label>Enter your guess</label>
                <input 
                    value={userInput} 
                    id="user_input" 
                    type="text" 
                    onChange={getUserValue} 
                    onKeyDown={submitUserInput}
                />
            </form>
            {props.toManyCharacters ? <p className={styles.GamePlay__error}>To many characters</p> : <></>}
            <button></button>
        </main>
    )
}