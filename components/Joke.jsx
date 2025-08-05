
export default function Joke(props) {
    return (
        <>
            {props.setup && <h3 className="setup">Setup: {props.setup}</h3>}
            <h2 className="punchline">Punchline: {props.punchline}</h2>
            <hr />
        </>
    )
}