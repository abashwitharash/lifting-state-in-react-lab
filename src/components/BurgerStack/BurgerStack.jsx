// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return   <ul>
    {props.burgerIngredients.map((bIngredient, index) => (
      <li key={index}>{bIngredient.name}</li>
    ))}
  </ul>
  };
  
  export default BurgerStack;
  