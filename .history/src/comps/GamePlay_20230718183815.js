import styles from '@/styles/GamePlay.module.css'
import { useState } from 'react';

export default function GamePlay(props) {
    const [userInput, setUserInput] = useState("")
    
    function getUserValue(event) {
        let i = event.target.value.length ;

        while (i > 0) {
            if (!'/^\d$/'.test(event.target.value[i])) {
                console.log("Alpha character")
                event.target.value = "";
                return;
            } else if (i > 4) {
                console.log("To many characters")
                event.target.value = "";
                return;
            }
            i--;
        }
        setUserInput(event.target.value);
        
    }

    
  function submitUserInput(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        console.log("Submitted")
        setUserInput(userInput);
        event.target.value = "";
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