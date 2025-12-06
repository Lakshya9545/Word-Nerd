import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../styling/home.css";

function Home() {
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomWords = useCallback(async () => {
    setLoading(true);
    try {
 
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

      const { data } = await axios.get(
        `https://api.datamuse.com/words?sp=${randomLetter}*&md=d&max=30`
      );

      const validWords = data
        .filter(item => item.defs && item.defs.length > 0)
        .slice(0, 7)
        .map((item, index) => {
            let definition = item.defs[0];
            if (definition.includes("\t")) {
                definition = definition.split("\t")[1];
            }

            let size = "small";
            if (index === 0) size = "large";
            else if (index >= 5) size = "medium";

            return {
                word: item.word,
                explanation: definition,
                size: size
            };
        });

      setWordData(validWords);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomWords();
  }, [fetchRandomWords]);

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Word Nerd</h1>
        <button className="refresh-btn" onClick={fetchRandomWords} disabled={loading}>
          {loading ? "Loading..." : "New Words"}
        </button>
      </header>
      
      <div className="bento-grid">
        {wordData.map((data, index) => (
          <div className={`bento-card ${data.size}`} key={index}>
            <h2>{data.word}</h2>
            <p>{data.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
