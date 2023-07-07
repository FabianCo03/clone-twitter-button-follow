import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    // acá le estoy pasando un elemento (elementos como props)
    const formattedUserName = <span>@midudev</span>

    return(
        <section className='App'>
            <TwitterFollowCard
                formattedUserName={formattedUserName}
                isFollowing
                userName={"FabianCo03"}
                name={"Fabián Orjuela"}  />

            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                isFollowing={false} 
                userName={"juanormo"} 
                name={"Juan Orjuela"}  />

            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                isFollowing 
                userName={"adidas"} 
                name={"Adidas"}  />

            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                isFollowing={false} 
                userName={"3gerardpique"} 
                name={"Gerard Piqué"}  />
        </section>
    )
}