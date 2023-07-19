import styles from '@/styles/GamePlay.module.css'
import { useState } from 'react';

export default function GamePlay(props) {
    const [userInput, setUserInput] = useState("")
    
    function getUserValue(event) {
        setUserInput(event.target.value);
    }

    
  const handleKeyDown = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      setUserInput(userInput);
    }
  };
    
    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <form>
                <label>Enter your guess</label>
                <input value={userInput} id="user_input" type="text" onChange={getUserValue} onKeyDown={handleKeyDown}/>
            </form>
            {props.toManyCharacters ? <p className={styles.GamePlay__error}>To many characters</p> : <></>}
            <button></button>
        </main>
    )
}