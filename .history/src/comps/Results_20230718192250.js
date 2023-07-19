export default function Results(props) {
    return (
        <main>
            <p>Correctly placed pieces: {props.correctly_placed}</p>
            <p>Incorrectly placed pieces: {props.incorretly_placed}</p>
        </main>
    )
}