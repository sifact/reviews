import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "../data.js";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };

    const nextPerson = () => {
        setIndex(checkNumber(index + 1));
        // setIndex((index) => {
        //     return checkNumber(index + 1);
        // });
    };
    const prevPerson = () => {
        setIndex(checkNumber(index - 1));
        // setIndex((index) => {
        //     return checkNumber(index - 1);
        // });
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * 4);

        if (randomNumber === index) {
            randomNumber += 1;
        }
        setIndex(checkNumber(randomNumber));
    };
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt="" className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button onClick={prevPerson} className="prev-btn">
                    <FaChevronLeft />
                </button>
                <button onClick={nextPerson} className="next-btn">
                    <FaChevronRight />
                </button>
            </div>
            <button onClick={randomPerson} className="random-btn">
                surprise me
            </button>
        </article>
    );
};

export default Review;
