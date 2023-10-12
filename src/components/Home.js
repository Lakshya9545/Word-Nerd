import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styling/home.css";

function Home() {
  const [wordData, setWordData] = useState([]);

  async function fetchRandomWords() {
    try {
      const response = await axios.get(
        "https://random-word-api.herokuapp.com/word?number=5"
      );
      const randomWords = response.data;

      const definitionResponses = await Promise.all(
        randomWords.map(async (randomWord) => {
          return axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`
          );
        })
      );

      const wordDataWithExplanations = [];
      for (let i = 0; i < randomWords.length; i++) {
        const definitionResponse = definitionResponses[i];
        const word = randomWords[i];
        const meanings = definitionResponse.data[0]?.meanings;
        const explanation = meanings?.[0]?.definitions?.[0]?.definition;

        wordDataWithExplanations.push({ word, explanation });
      }

      setWordData(wordDataWithExplanations);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchRandomWords();
  }, []);

  return (
    <>
      <div className="box">
        <h1 className="title">Word Nerd</h1>

        {wordData.map((data, index) => (
          <div className="vocab" key={index}>
            <h1>{data.word}</h1>
            <p>{data.explanation ?? "No explanation found"}</p>
          </div>
        ))}

     
        
          <a href="#" onClick={() => fetchRandomWords()}>
            NEW WORDS
          </a>
       
      </div>
    </>
  );
}

export default Home;
