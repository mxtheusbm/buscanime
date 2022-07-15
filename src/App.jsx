import dados from './assets/cubo-de-dados.png'

function App() {
  return (
    <div>
      <header>
        <img src={dados}alt="" />
        
        <h1>Não sabe o que assistir?</h1>
      </header>

      <main>
        <button>
          <img src={dados} alt="" />
          Encontrar anime
        </button>

        <p>
          Clique em "Encontrar anime" que traremos informações
          de algum anime para você assistir hoje.
        </p>
      </main>

      
    </div>
    
  )
}

export default App
