import pepperoniImg from "../assets/food/pepperoni-pizza.jpg";
import hawaiianImg from "../assets/food/hawaiian-pizza.jpg";
import veganImg from "../assets/food/vegan-pizza.jpg";

const foodItem = (name, description, img_src, rating) => {
  const img = new Image();
  img.src = img_src;

  return { name, description, img, rating };
};

const pepperoniPizza = foodItem(
  "Pepperoni Pizza",
  "Red base topped with spicy salami (contains beef and pork)",
  pepperoniImg,
  4.2
);

const hawaiianPizza = foodItem(
  "Hawaiian Pizza",
  "Red base topped with savoury chicken ham, melty mozzarella cheese and pineapples.",
  hawaiianImg,
  3.8
);

const veganPizza = foodItem(
  "Vegan Pizza",
  "Vegan cheese, spinach, mixed peppers, olives and mushrooms.",
  veganImg,
  3.5
);

export { pepperoniPizza, hawaiianPizza, veganPizza };
