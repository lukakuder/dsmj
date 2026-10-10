import './App.css'
import { QA } from './components/QA'
import { Highlight } from './components/Highlight'
import { BlockHighlight } from './components/BlockHighlight'
import { Flashcard } from './components/Flashcard'

function App() {
  return (
    <article className="prose max-w-2xl mx-auto py-6">
      <h1>NOTESMD</h1>

      <h2>1. Osnovne stvari</h2>

      <BlockHighlight version="highlight"><p>To je nek highlight.</p></BlockHighlight>
      <BlockHighlight version="important"><p>To je neki pomembnega.</p></BlockHighlight>
      <BlockHighlight version="warning"><p>To je neko opozorilo.</p></BlockHighlight>
      <BlockHighlight version="success"><p>To je neki uspesnega.</p></BlockHighlight>
      <BlockHighlight version="summary"><p>To je nek blok besedila.</p></BlockHighlight>

      <p><Highlight version="highlight">Tole bi bil highlight</Highlight></p>
      <p><Highlight version="important">Tole bi bil highlight</Highlight></p>
      <p><Highlight version="warning">Tole bi bil highlight</Highlight></p>
      <p><Highlight version="success">Tole bi bil highlight</Highlight></p>
      <p><Highlight version="summary">Tole bi bil highlight</Highlight></p>

      <h2>2. Vprasanja in odgovori</h2>

      <QA question="Kako ti je ime?" answer="Luka." />
      <QA question="Kako se pises?" answer="Kuder." />

      <hr />

      <h1>Flashcards</h1>

      <h2>Kratek opis</h2>

      <p>Flashcard-i so kartice, ki imajo na sebi napisano vprasanje in odgovor.</p>

      <p>Najprej je prikazano samo vprasanje, odgovor pa se pokaže ob kliku na kartico.</p>

      <p>Flashcardi so uporabni za:</p>
      <ul>
        <li><Highlight version="success">Učenje</Highlight></li>
        <li>Preverjanje znanja</li>
        <li>itd.</li>
      </ul>

      <h2>Primeri flashcardov</h2>

      <Flashcard question="Kaj je to flashcard?" answer="Orodje za ucenje." />
      <Flashcard question="Za kaj se lahko tudi uporabljajo?" answer="Za preverjanje znanja" />

      <BlockHighlight version="important">Veliko se lahko naučite ravno z izdelavo svojih flashcardov</BlockHighlight>
      <BlockHighlight version="summary">Flashcard-i so zelo uporabno orodje za učenje</BlockHighlight>

      <hr />

      <h1>Kolokvij 1</h1>
      <h2>Navodila</h2>
      <p>
        Pri pisanju lahko uporabljate samo{' '}
        <Highlight version="highlight">pisalo in kalkulator</Highlight>.
      </p>

      <h3>Vsebina kolokvija</h3>
      <p>
        Kolokvij bo sestavljen iz{' '}
        <Highlight version="important">večih tipov vprašanj</Highlight>
      </p>
      <BlockHighlight version="highlight">
        <table className="w-fit">
          <thead>
            <tr>
              <th className="p-1 border">Tip</th>
              <th className="p-1 border">Skupna vrednost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-1 border">Kvizno</td>
              <td className="p-1 border">30%</td>
            </tr>
            <tr>
              <td className="p-1 border">Esejsko</td>
              <td className="p-1 border">70%</td>
            </tr>
          </tbody>
        </table>
      </BlockHighlight>

      <BlockHighlight version="important">
        Sigurno bo vsaj eno vprašanje iz vaj.
      </BlockHighlight>

      <h2>Primeri vprašanj</h2>

      <QA
        question="Kdaj je živel stegozavr?"
        answer="V juri, pred približno 150 milijoni let."
      />
      <QA
        question="Koliko je bil dolg?"
        answer="Okoli 9 metrov, od tega je bila glava zelo majhna."
      />
      <QA
        question="Kaj je jedel?"
        answer="Rastline, bil je rastlinojed."
      />

      <BlockHighlight version="summary">
        Vsa vprašanja so iz danih prosojnic
      </BlockHighlight>
    </article>
  )
}

export default App
