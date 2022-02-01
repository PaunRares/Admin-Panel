import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';


function About() {
  return (
        <div className="About">
            <h2 className="fst-italic mt-4 mb-3">Functionalitati Admin Panel</h2>
            <ul>
                <li>Preluare Useri si Postari in urma unui request asincron de la API (JSON Placeholder)</li>
                <li >Randarea Userilor si Postarilor existente</li>
                <li >Adaugare user nou</li>
                <li >Schimbare culoare fundal si culoare text</li>
                <li >Stergere User</li>
                <li>Validarea datelor din formular</li>
            </ul>
            <h2 className="fst-italic mt-4 mb-3">Tehnologii folosite pentru realizare</h2>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Redux-Thunk</li>
                <li>React  Router</li>
                <li>Bootstrap</li>
            </ul>
            <Link to="/">
                <button className="btn btn-dark">Inapoi la pagina de start</button>
            </Link>
        </div>
    );
}

export default About;
