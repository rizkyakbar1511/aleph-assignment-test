import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { AnswerA, AnswerB, AnswerC, Home } from "./pages";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav container">
        <Link className="nav__logo" to="/">
          <img src="/logo.png" alt="logo" width={80} height={24} />
        </Link>

        <ul className="nav__list">
          <li>
            <NavLink to="/answer-a" className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}>
              Answer A
            </NavLink>
          </li>
          <li>
            <NavLink to="/answer-b" className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}>
              Answer B
            </NavLink>
          </li>
          <li>
            <NavLink to="answer-c" className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}>
              Answer C
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="content container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/answer-a" element={<AnswerA />} />
          <Route path="/answer-b" element={<AnswerB />} />
          <Route path="/answer-c" element={<AnswerC />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
