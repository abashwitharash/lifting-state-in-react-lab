// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    return (
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.name}</li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  