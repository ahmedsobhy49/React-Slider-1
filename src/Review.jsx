import React, { useEffect, useState } from "react";
import reviews from "./data";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { ImQuotesLeft } from "react-icons/im";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const review = reviews[index];
  const { name, job, image, text } = review;

  useEffect(() => {
    setPreviousIndex(index);
  }, [index]);

  function handleNext() {
    index < reviews.length - 1 ? setIndex((prev) => prev + 1) : setIndex(0);
  }

  function handlePrev() {
    index > 0 ? setIndex((prev) => prev - 1) : setIndex(reviews.length - 1);
  }

  function randomReview() {
    let randomIndex = Math.trunc(Math.random() * reviews.length);
    while (randomIndex === index || randomIndex === previousIndex) {
      randomIndex = Math.trunc(Math.random() * reviews.length);
    }
    setIndex(randomIndex);
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <ImQuotesLeft />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className=".btn-container">
        <button className="prev-btn" onClick={handlePrev}>
          <GoChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <GoChevronRight />
        </button>
      </div>
      <button className="btn" onClick={randomReview}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
