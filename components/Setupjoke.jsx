import Joke from "./joke";
import jokesData from "../src/jokesData";
export default function Setupjoke() {
    const jokeElements = jokesData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <main>
            {jokeElements}
        </main>
    )
}