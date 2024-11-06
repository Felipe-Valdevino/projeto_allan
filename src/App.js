import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [textColor, setTextColor] = useState("#505050");
  const [buttonColor, setButtonColor] = useState("#505050");

  const quotesList = [
    {
      text: "Só por hoje.",
      author: "João Pedro",
    },
    {
      text: "Amanhã eu começo.",
      author: "Arthur Santana",
    },
    {
      text: "O único limite para a nossa realização de amanhã são as nossas dúvidas de hoje.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "Não espere por uma crise para descobrir o que é importante em sua vida.",
      author: "Platão",
    },
    { text: "Não encontre falhas, encontre soluções.", author: "Henry Ford" },
  ];

  // Array de cores
  const colors = [
    "#FF33A8",
    "#FFBD33",
    "#33FFF8",
    "#8B4513",
    " #808080",
    "#4E5B31",
    "#FFD700",
    "#C0C0C0",
  ];

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    setQuote(`"${quotesList[randomIndex].text}"`);
    setAuthor(quotesList[randomIndex].author);
  };

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text" style={{ color: textColor }}>
          {quote}
        </p>
        <p id="author" style={{ color: textColor }}>
          - {author}
        </p>

        <button
          id="new-quote"
          onClick={generateRandomQuote}
          className="button"
          style={{ backgroundColor: buttonColor }} // Aplica a cor dos botões
        >
          citação
        </button>

        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            quote + " - " + author
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: textColor,
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              width: "32px",
              height: "32px",
              color: textColor,
              marginRight: "500px",
            }}
          >
            <path d="M23.643 4.937a10.004 10.004 0 01-2.828.775 4.93 4.93 0 002.165-2.724 10.073 10.073 0 01-3.127 1.187A4.916 4.916 0 0016.616 4c-2.707 0-4.909 2.203-4.909 4.913 0 .385.043.761.126 1.123C7.691 10.176 4.066 8.017 1.64 4.848c-.423.724-.666 1.564-.666 2.475 0 1.708.872 3.213 2.188 4.088a4.905 4.905 0 01-2.228-.616v.062c0 2.385 1.692 4.376 3.946 4.84-.414.112-.848.171-1.293.171-.316 0-.624-.031-.925-.086.627 1.956 2.444 3.384 4.596 3.425a9.879 9.879 0 01-6.116 2.106c-.396 0-.787-.023-1.174-.069a13.947 13.947 0 007.548 2.212c9.056 0 14.002-7.485 14.002-13.964 0-.213 0-.425-.014-.637A10.018 10.018 0 0024 4.59a9.985 9.985 0 01-2.357.646z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
