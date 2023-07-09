import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'FabianCo03',
        name: 'Fabián Orjuela',
        isFollowing: true
    },
    {
        userName: 'juanormo',
        name: 'Juan Orjuela',
        isFollowing: true
    },
    {
        userName: '3gerardpique',
        name: 'Gerard Pique',
        isFollowing: false
    },
]

export function App() {

    return(
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => {
                    return (
                        <TwitterFollowCard 
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            key={userName}
                        >
                            {name}                           
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}