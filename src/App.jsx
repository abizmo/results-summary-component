import React from 'react';
import Button from './components/Button';

import Category from './components/Category';
import Footer from './components/Footer';
import Score from './components/Score';
import useCategories from './hooks/useCategories';

function App() {
  const { categories } = useCategories('/data.json');

  return (
    <div className="h-screen grid grid-rows-root">
      <main className="md:container md:mx-auto">
        <header className="bg-gradient-to-b from-slate-blue to-royal-blue text-neutral-100 text-center rounded-b-3xl px-16 py-7">
          <h1 className="mb-6 tracking-wide">Your Result</h1>
          <Score out={76} of={100} />
          <div>
            <p className="text-lg font-bold mb-4">Great</p>
            <p className="text-sm leading-tight">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </header>
        <div className="p-8 grid gap-6">
          <h3 className="font-bold">Summary</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.category} className="[&:not(:last-child)]:mb-4">
                <Category {...category} />
              </li>
            ))}
          </ul>
          <Button>Continue</Button>
        </div>
      </main>
      <Footer name="Abián Izquierdo" url="https://www.abizmo.dev" />
    </div>
  );
}

export default App;
