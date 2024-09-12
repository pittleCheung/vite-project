import { Header } from './Header';
import './App.css';
// import { WindowScroller } from 'react-virtualized'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Header></Header>
      {/* <WindowScroller /> */}
      <div>
        <header className="App-header">
          <img className="w-20" alt="logo" />
          <p className="bg-red-400">Hello Vite + React123!</p>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <BrowserRouter basename='/vite-project/'>
          <Routes>
            <Route path="/home" element={<div>home</div>}></Route>
            <Route path="/about" element={<div>about</div>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
