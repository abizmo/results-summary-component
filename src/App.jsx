import React from 'react';
import Button from './components/Button';

import Footer from './components/Footer';
import Results from './components/Results';
import useCategories from './hooks/useCategories';

function App() {
  const { categories } = useCategories('/data.json');
  const totalScore =
    categories.reduce((total, current) => total + current.score, 0) /
    categories.length;

  return (
    <div className="h-screen grid grid-rows-root">
      <Results>
        <Results.Header>
          <Results.Score max={100}>{totalScore.toFixed(0)}</Results.Score>
          <Results.Review title="Great">
            You scored higher than 65% of the people who have taken these tests.
          </Results.Review>
        </Results.Header>
        <Results.Body>
          <Results.Summary>
            {categories.map((category) => (
              <Results.SummaryItem key={category.category} {...category} />
            ))}
          </Results.Summary>
          <Button>Continue</Button>
        </Results.Body>
      </Results>
      <Footer name="Abián Izquierdo" url="https://www.abizmo.dev" />
    </div>
  );
}

export default App;
