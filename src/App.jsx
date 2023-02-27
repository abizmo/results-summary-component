import React from 'react';

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <h1>Your Result</h1>
          <div>
            <h2>
              76<span>of 100</span>
            </h2>
          </div>
          <div>
            <p>Great</p>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </header>
        <div>
          <h3>Summary</h3>
          <ul>
            <li>
              <div>
                <img src="#" alt="" />
                <p>Reaction</p>
                <p>
                  <span>80</span>/100
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src="#" alt="" />
                <p>Memory</p>
                <p>
                  <span>92</span>/100
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src="#" alt="" />
                <p>Verbal</p>
                <p>
                  <span>61</span>/100
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src="#" alt="" />
                <p>Visual</p>
                <p>
                  <span>72</span>/100
                </p>
              </div>
            </li>
          </ul>
          <button type="button">Continue</button>
        </div>
      </main>
      <footer className="text-xs text-center">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="text-primary-blue"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a className="text-primary-blue" href="https://www.abizmo.dev">
          Abián Izquierdo
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
