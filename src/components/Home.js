import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import "../styling/home.css";


function Home() {

const [meanings, setMeanings] = useState([]);

    const dictionaryAPI = async () => {
    
        try {
            const data = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/plane");

        } catch (error) {
            console.log(error);
        }
    
    }

useEffect(() => {
dictionaryAPI();

}, [])



{/*const [wordData, setWordData] = useState({ word: "", explanation: "" });

  useEffect(() => {
    // Function to fetch random word and explanation
    const fetchRandomWord = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = "YOUR_API_KEY";
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/random?apiKey=${apiKey}`
        );

        const { word, meanings } = response.data[0];
        const explanation =
          meanings[0]?.definition || "No definition available";

        setWordData({ word, explanation });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRandomWord();
  }, []);*/}




  return (
    <>
      <div className="box">
        <h1 className="title"> Word Nerd </h1>

        <div className="vocab">
          <h1>Random word</h1>
          <p>
            It's explanation :- Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptatem neque accusantium delectus enim ab
            libero beatae, possimus obcaecati dolorem nostrum ex sit reiciendis
            temporibus quasi, repellat natus quo nesciunt itaque consectetur
            voluptatibus praesentium, pariatur maiores accusamus labore.
            Voluptatibus voluptatem perspiciatis aliquam illo praesentium
            assumenda consequatur. Quibusdam eveniet ea corrupti hic aut dolore
            blanditiis quaerat! Mollitia voluptatibus ducimus molestiae nesciunt
            animi dolore recusandae commodi esse! Similique blanditiis nulla ut
            animi, labore cum! Ipsam dolorum maxime voluptatibus veritatis,
            ullam accusantium, sunt suscipit necessitatibus praesentium soluta
            error nisi tenetur. Itaque voluptatem qui vitae? Rerum cumque
            deserunt sed mollitia vel quisquam perferendis veritatis quos?
          </p>
        </div>

        <div className="vocab">
          <h1>Random word</h1>
          <p>
            It's explanation :- Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptatem neque accusantium delectus enim ab
            libero beatae, possimus obcaecati dolorem nostrum ex sit reiciendis
            temporibus quasi, repellat natus quo nesciunt itaque consectetur
            voluptatibus praesentium, pariatur maiores accusamus labore.
            Voluptatibus voluptatem perspiciatis aliquam illo praesentium
            assumenda consequatur. Quibusdam eveniet ea corrupti hic aut dolore
            blanditiis quaerat! Mollitia voluptatibus ducimus molestiae nesciunt
            animi dolore recusandae commodi esse! Similique blanditiis nulla ut
            animi, labore cum! Ipsam dolorum maxime voluptatibus veritatis,
            ullam accusantium, sunt suscipit necessitatibus praesentium soluta
            error nisi tenetur. Itaque voluptatem qui vitae? Rerum cumque
            deserunt sed mollitia vel quisquam perferendis veritatis quos?
          </p>
        </div>
        <div className="vocab">
          <h1>Random word</h1>
          <p>
            It's explanation :- Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptatem neque accusantium delectus enim ab
            libero beatae, possimus obcaecati dolorem nostrum ex sit reiciendis
            temporibus quasi, repellat natus quo nesciunt itaque consectetur
            voluptatibus praesentium, pariatur maiores accusamus labore.
            Voluptatibus voluptatem perspiciatis aliquam illo praesentium
            assumenda consequatur. Quibusdam eveniet ea corrupti hic aut dolore
            blanditiis quaerat! Mollitia voluptatibus ducimus molestiae nesciunt
            animi dolore recusandae commodi esse! Similique blanditiis nulla ut
            animi, labore cum! Ipsam dolorum maxime voluptatibus veritatis,
            ullam accusantium, sunt suscipit necessitatibus praesentium soluta
            error nisi tenetur. Itaque voluptatem qui vitae? Rerum cumque
            deserunt sed mollitia vel quisquam perferendis veritatis quos?
          </p>
        </div>

        <a href="">New words</a>

      </div>
    </>
  );
}

export default Home
