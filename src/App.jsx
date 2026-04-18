import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SupportPage from './message-board.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* Anything written OUTSIDE <Routes> shows up on EVERY page (like a Header) */}
      <nav>
        <a href="/">Home</a> | <a href="/message-board">Message Board</a>
      </nav>

      <Routes>
        {/* Home Page */}
        <Route path="main.js" element={
          <div>
            <h1>Welcome to the Site</h1>
            <p>This is the content your teammate is building.</p>
          </div>
        } />

        {/* Your Page */}
        <Route path="/message-board" element={<SupportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;