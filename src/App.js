import "./styles.css";
import React, { useState } from "react";

const booksDB = {
  technical: [
    {
      name: "Eloquent Javascript",
      rating: 4.5
    },
    {
      name: "Core Java",
      rating: 4
    }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: 4.9
    },
    {
      name: "The Alchemist",
      rating: 5
    }
  ]
};

export default function App() {
  const [category, setCategory] = useState("technical");
  function getCategories() {
    return Object.keys(booksDB);
  }

  function showBooks(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h2> My Book Database </h2>
      <img
        alt="Books Stack"
        src="https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg?fit=scale"
      />
      <br />

      <div>
        {getCategories().map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => showBooks(category)}
              className="list-category"
            >
              {category}
            </button>
          );
        })}
      </div>

      <hr />
      <div>
        <ul>
          {booksDB[category].map((book, index) => {
            return (
              <li className="list-item" key={index}>
                <ul>
                  <li className="list-sub-item list-book-name">{book.name}</li>
                  <li className="list-sub-item">{book.rating}</li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
