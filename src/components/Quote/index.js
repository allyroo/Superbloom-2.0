import React, { useEffect, useState } from "react";
import "./QuoteAPI.css";
import axios from "axios";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Quote = () => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((response) => {
      setQuote(response.data.content);
      setAuthor(response.data.author);
    });
  }, []);

  return (
    <div className="Quote">
      <div className="quoteBox">
        <blockquote>
          <div className="quote">
            <FontAwesomeIcon icon={faQuoteLeft} /> {quote}
          </div>
          <div className="author">
            <i>{author}</i>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default Quote;
