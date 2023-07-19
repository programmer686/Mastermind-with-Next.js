import styles from '@/styles/PastPlay.module.css'

export default function PastPlay(props) {
    
    const pastPlayHistory = props.playHistory.map(item => {
        return (
        <main>
            <div className={styles.PastPlay__results_body}>
                <p className={styles.PastPlay__name}>Correctly placed pieces: {item[0]}</p>
                <p className={styles.PastPlay__name}>Incorrectly placed pieces: {item[1]}</p>
            </div>
        </main>
        )
    })


    return (
        <main className={styles.PastPlay__board}>
            <h1 className={styles.PastPlay__name}>Play History</h1>
            {pastPlayHistory}
        </main>
    )
}