import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MessageBoard from "./message-board";
import Connect from "./connect";
import Ressources from "./ressources";
import './style.css';

function App() {
  return (
    <div align: center >
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/message-board">Message Board</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
          </li>
          <li>
            <Link to="/ressources">Ressources</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message-board" element={<MessageBoard />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/ressources" element={<Ressources />} />
      </Routes>
    </div>
  );
}

export default App;

// import { Routes, Route, Link } from "react-router-dom";
// import MessageBoard from "./message-board";

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function App() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         {" | "}
//         <Link to="/message-board">Message Board</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/message-board" element={<MessageBoard />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;