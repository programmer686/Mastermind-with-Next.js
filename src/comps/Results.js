import styles from '@/styles/Results.module.css'

export default function Results(props) {
    return (
        <main>
            <p className={styles.Results__p_results}>Correctly placed pieces: {props.correctly_placed}</p>
            <p className={styles.Results__p_results}>Incorrectly placed pieces: {props.incorretly_placed}</p>
        </main>
    )
}