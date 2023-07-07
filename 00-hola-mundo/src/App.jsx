import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`

    return(
        <section className='App'>
            <TwitterFollowCard
                formatUserName={format}
                isFollowing
                userName={"FabianCo03"}
                name={"Fabián Orjuela"}  />

            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing={false} 
                userName={"juanormo"} 
                name={"Juan Orjuela"}  />

            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName={"adidas"} 
                name={"Adidas"}  />

            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing={false} 
                userName={"3gerardpique"} 
                name={"Gerard Piqué"}  />
        </section>
        
    )
}