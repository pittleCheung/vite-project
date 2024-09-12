import { Header } from './Header';
import './App.css';
// import { WindowScroller } from 'react-virtualized'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      {/* <BrowserRouter basename="/vite-project/">
        <Header></Header>
        <div>
          <header className="App-header">
            <img className="w-20" alt="logo" />
            <p className="bg-red-400">Hello Vite + React123!</p>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </header>

          <Routes>
            <Route path="/home" element={<div>home</div>}></Route>
            <Route path="/about" element={<div>about</div>}></Route>
          </Routes>
        </div>
      </BrowserRouter> */}

      <BrowserRouter basename="/vite-project/">
        <Header />
        {/* <WindowScroller /> */}
        <div>
          <header className="App-header">
            <img className="w-20" alt="logo" />
            <p className="bg-red-400">Hello Vite + React123!</p>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </header>
          <Routes>
            <Route path="/home" element={<div>home</div>} />
            <Route path="/about" element={<div>about</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
