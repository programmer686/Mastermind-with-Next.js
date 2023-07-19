import styles from '@/styles/GamePlay.module.css'
import { useState } from 'react';
import Logic from './Logic';
import Results from './Results';


export default function GamePlay(props) {
    const [userInput, setUserInput] = useState("")
    const [guessResults, setGuessResult] = useState([]);

    function getUserValue(event) {
        if (!(/[a-zA-Z]/gi.test(event.target.value)) && event.target.value.length <= 4) {
            setUserInput(event.target.value);
        }  
    }

    
  function submitUserInput(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        setUserInput(userInput);
        setGuessResult(Logic(userInput, '1234'));
        props.setPlayHistory(prev => {
            prev.push(Logic(userInput, '1234'))
        })
    }
  };
    
    return (
        <main className={styles.GamePlay__board }>
            <h1 className={styles.GamePlay__title}>Turn</h1>
            <form>
                <input 
                    className={styles.GamePlay__userInput_btn}
                    value={userInput} 
                    id="user_input" 
                    type="text" 
                    onChange={getUserValue} 
                    onKeyDown={submitUserInput}
                    placeholder="Enter your guess..."
                />
            </form>
            <Results correctly_placed={guessResults[0]} incorretly_placed={guessResults[1]}/>
            {props.toManyCharacters ? <p className={styles.GamePlay__error}>To many characters</p> : <></>}
          
        </main>
    )
}