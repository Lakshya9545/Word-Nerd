import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../styling/home.css";

function Home() {
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomWords = useCallback(async () => {
    setLoading(true);
    try {
      const { data: randomWords } = await axios.get(
        "https://random-word-api.herokuapp.com/word?number=5"
      );

      const wordDataWithExplanations = await Promise.all(
        randomWords.map(async (word) => {
          try {
            const { data } = await axios.get(
              `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            const explanation = data[0]?.meanings?.[0]?.definitions?.[0]?.definition || "No explanation found";
            return { word, explanation };
          } catch {
            return { word, explanation: "No explanation found" };
          }
        })
      );

      setWordData(wordDataWithExplanations);
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
    <div className="box">
      <h1 className="title">Word Nerd</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        wordData.map((data, index) => (
          <div className="vocab" key={index}>
            <h1>{data.word}</h1>
            <p>{data.explanation}</p>
          </div>
        ))
      )}
      <a href="#" onClick={fetchRandomWords}>
        NEW WORDS
      </a>
    </div>
  );
}

export default Home;
