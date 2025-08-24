import style from './App.module.css'
import { FormList } from './components/FormList/FormList';
import { BlockAddress } from './components/BlockAddress/BlockAddress'
import { data } from './data/data'
import { useState } from 'react';
import { ContentAddress } from './components/ContentAddress/ContentAddress'

function App() {
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className={style.main}>
      <FormList search={search} setSearch={setSearch}/>
      <BlockAddress dataObject={data} search={search} onSelectCard={setSelectedCard}/>

      {selectedCard && (
        <ContentAddress data={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
}

export default App;
