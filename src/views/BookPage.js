// components/BookPage.js
import React from 'react';

const BookPage = ({ pageContent, onOptionSelected }) => {
  const { text, image, video, options } = pageContent;

  return (
    <div className='BookPage'>
      <div className="container">
        {text && <p>{text}</p>}
        {image && <img src={image} alt="Imagem da página" />}
        {video && <video src={video} controls />}
        <div className="button-container">
          {options.map((option) => (
            <button
              key={option.optionPage}
              onClick={() => onOptionSelected(option.optionPage)}
              className="shrink-border"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
