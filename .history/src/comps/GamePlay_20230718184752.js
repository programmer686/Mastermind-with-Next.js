import styles from '@/styles/GamePlay.module.css'
import { useState } from 'react';




export default function GamePlay(props) {
    const [userInput, setUserInput] = useState("")
    
    function getUserValue(event) {
        let i = event.target.value.length ;
        
        while (i > 0) {
            let char = event.target.value[i];
            let fullInput = event.target.value;

            if (/[a-zA-Z]/.test(char)) {
                console.log("Alpha character")
               
            } else if (fullInput > 4) {
                console.log("To many characters")
                
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
       // event.target.value = "";
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