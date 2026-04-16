import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent", image: "https://source.unsplash.com/200x200/?aloe" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: "https://source.unsplash.com/200x200/?snake-plant" },
  { id: 3, name: "Peace Lily", price: 20, category: "Indoor", image: "https://source.unsplash.com/200x200/?lily" },
  { id: 4, name: "Cactus", price: 8, category: "Succulent", image: "https://source.unsplash.com/200x200/?cactus" },
  { id: 5, name: "Fern", price: 12, category: "Outdoor", image: "https://source.unsplash.com/200x200/?fern" },
  { id: 6, name: "Palm Plant", price: 18, category: "Outdoor", image: "https://source.unsplash.com/200x200/?palm-plant" },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>🌿 Product Listing</h1>

      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants
              .filter(p => p.category === category)
              .map(plant => (
                <div
                  key={plant.id}
                  style={{
                    background: "white",
                    color: "black",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "150px",
                  }}
                >
                  <img src={plant.image} alt={plant.name} width="100%" />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
