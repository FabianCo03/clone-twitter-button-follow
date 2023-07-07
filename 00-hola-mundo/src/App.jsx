import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return(
        <section className='App'>
            {/* los 3 puntos se llaman 'rest operator */}
            <TwitterFollowCard isFollowing userName={"FabianCo03"}>
                Fabián Orjuela
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} userName={"juanormo"} >
                Juan Orjuela
            </TwitterFollowCard>

            <TwitterFollowCard  isFollowing >
            </TwitterFollowCard>

            <TwitterFollowCard  isFollowing={false} userName={"3gerardpique"} >
                Gerard Piqué
            </TwitterFollowCard>

        </section>
    )
}