import React, { useEffect, useState } from "react";
import "./QuoteAPI.css";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try {
      const data = axios.get("https://api.quotable.io/random");
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="Quote">
      <div className="quoteBox">
        <div className="container">
          <div className="quote">{quote}</div>
          <div className="quthor">{author}</div>
          <div className="quoteButton">
            <button onClick={quoteAPI}>Click for quote </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
