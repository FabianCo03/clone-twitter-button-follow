import './App.css'

export function App() {
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://unavatar.io/FabianCo03" alt="Avatar de FabianCo03" />
                <div className='tw-followCard-info'>
                    <strong>Fabián Orjuela</strong>
                    <span className='tw-followCard-infoUserName'>@FabianCo03</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}