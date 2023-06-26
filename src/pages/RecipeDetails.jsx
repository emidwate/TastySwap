import React from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetail() {
  const params = useParams();

  const [recipeData, setRecipeData] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/recipes/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data);
      });
  }, [params.id]);

  if (recipeData) {
    const ingredients = recipeData.recipe.ingredients.map(
      (ingredient, index) => <li key={index}>{ingredient}</li>
    );

    return (
      <div className='recipe-detail-container'>
        {recipeData ? (
          <div className='recipe-detail-wrapper'>
            <img src={recipeData.recipe.image} className='recipe-detail-img' />
            <div className='recipe-detail-description'>
              <h2>{recipeData.recipe.name}</h2>
              <h4>Preparation time: {recipeData.recipe.preparationTime}</h4>
              <h5>Ingredients: </h5>
              <ul>{ingredients}</ul>
              <p>{recipeData.recipe.instructions}</p>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}
