import './App.css';
import Pestañas from './components/Pestañas';

function App() {
  const tabs = [
    { label: 'Tab 1', content: 'Contenido de la pestaña 1 lalala' },
    { label: 'Tab 2', content: 'Contenido de la pestaña 2 lololo' },
    { label: 'Tab 3', content: 'Contenido de la pestaña 3 lelele' },
  ];

  return (
    <div className="App">
      <Pestañas tabs={tabs} />
    </div>
  );
}

export default App;
