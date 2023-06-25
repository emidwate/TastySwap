import React from 'react';
import { Link } from 'react-router-dom';
export default function Recipes() {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  const recipesEls = recipes.map((recipe) => {
    return (
      <Link
        key={recipe.id}
        to={`recipes/${recipe.id}`}
        className='recipe-link-wrapper'
      >
        <div className='recipe-single'>
          <img
            src={recipe.image}
            alt={`Photo of ${recipe.name}`}
            className='recipe-image'
          />
          <h3>{recipe.name}</h3>
          <p>{recipe.instructions}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className='recipe-container'>
      <h3 className='recipe-container-title'>
        Food recipes available on the website, click on the recipe to see more.
      </h3>
      <div className='recipe-wrapper'>
        {recipes.length > 0 ? (
          <section className='food-list'>{recipesEls}</section>
        ) : (
          <h3 className='loading-message'>Loading...</h3>
        )}
      </div>
    </div>
  );
}
