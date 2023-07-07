import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return(
        <section className='App'>
        <TwitterFollowCard isFollowing userName={"FabianCo03"} name={"Fabián Orjuela"}  />
        <TwitterFollowCard isFollowing={false} userName={"juanormo"} name={"Juan Orjuela"}  />
        <TwitterFollowCard isFollowing userName={"adidas"} name={"Adidas"}  />
        <TwitterFollowCard isFollowing={false} userName={"3gerardpique"} name={"Gerard Piqué"}  />
        </section>
        
    )
}