import icon from './icon.png';
import './App.css';
import StyleComponet from './components/StyleComponet';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={icon} className="App-logo" alt="logo" />
         </header>

         <StyleComponet></StyleComponet>

      </div>
   );
}

export default App;
