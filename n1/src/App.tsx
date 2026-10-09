import './App.css'
import { QA } from './components/QA'
import { Highlight } from './components/Highlight'
import { BlockHighlight } from './components/BlockHighlight'

function App() {
  return (
    <>
      <div className="flex flex-col items-start gap-2 p-2">

        <h1>NOTESMD</h1>

        <h2>1. Osnovne stvari</h2>

          <BlockHighlight version="highlight"><p>To je nek highlight.</p></BlockHighlight>
          <BlockHighlight version="important"><p>To je neki pomembnega.</p></BlockHighlight>
          <BlockHighlight version="warning"><p>To je neko opozorilo.</p></BlockHighlight>
          <BlockHighlight version="success"><p>To je neki uspesnega.</p></BlockHighlight>
          <BlockHighlight version="summary"><p>To je nek blok besedila.</p></BlockHighlight>

          <Highlight version="highlight">Tole bi bil highlight</Highlight>
          <Highlight version="important">Tole bi bil highlight</Highlight>
          <Highlight version="warning">Tole bi bil highlight</Highlight>
          <Highlight version="success">Tole bi bil highlight</Highlight>
          <Highlight version="summary">Tole bi bil highlight</Highlight>

        <h2>2. Vprasanja in odgovori</h2>

        <QA question="Kako ti je ime?" answer="Luka." />
        <QA question="Kako se pises?" answer="Kuder." />
      </div>
    </>
  )
}

export default App
