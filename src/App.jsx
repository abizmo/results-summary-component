import React from 'react';

function App() {
  return (
    <div className='h-screen grid grid-rows-root'>
      <main className="md:container md:mx-auto">
        <header className='bg-gradient-to-b from-slate-blue to-royal-blue text-neutral-100 text-center rounded-b-3xl px-16 py-7'>
          <h1 className='mb-6 tracking-wide'>Your Result</h1>
          <div className='bg-gradient-to-b from-violet-blue to-persian-blue w-36 h-36 mx-auto rounded-full py-8 mb-8'>
            <p className='text-2xl font-extrabold mb-3'>
              76
            </p>
            <p className='text-sm'>of 100</p>
          </div>
          <div>
            <p className='text-lg font-bold mb-4'>Great</p>
            <p className='text-sm leading-tight'>
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
