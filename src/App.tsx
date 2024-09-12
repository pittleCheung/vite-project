import { Header } from './Header';
import './App.css';
// import { WindowScroller } from 'react-virtualized'
function App() {
  return (
    <>
      <Header></Header>
      {/* <WindowScroller /> */}
      <div>
        <header className="App-header">
          <img className="w-20" alt="logo" />
          <p className="bg-red-400">Hello Vite + React!</p>
        </header>
      </div>
    </>
  );
}

export default App;
