import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const FabianCo03 = { isFollowing: true, userName: 'FabianCo03' }
    const juanormo = { isFollowing: true, userName: 'juanormo' }

    return(
        <section className='App'>

            {/* los 3 puntos se llaman 'rest operator */}
            <TwitterFollowCard {...FabianCo03}>
                Fabián Orjuela
            </TwitterFollowCard>

            <TwitterFollowCard {...juanormo} >
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