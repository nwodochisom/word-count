import React, { useState } from 'react';
import CountUp from 'react-countup';
import './WordCountAssessment.css'

function WordCountAssessment() {
  const [assessmentText, setAssessmentText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [warning, setWarning] = useState('');

  const handleAssessmentChange = (event) => {
    setAssessmentText(event.target.value);
  };

  const countWords = () => {
    const words = assessmentText.trim().split(/\s+/);
    return words.length;
  };

  const handleCountWords = () => {
    if (assessmentText.length === 0) {
      return setWordCount(0);
    }
    const count = countWords();
    setWordCount(count);
  };
  const handleClearTextField = () => {
    setAssessmentText('')
    setWordCount(0)
  };

  return (
    <div className="container">
      <h2>Word Count</h2>
      <textarea
        className="textarea"
        value={assessmentText}
        onChange={handleAssessmentChange}
        placeholder="Enter your assessment text here..."
        rows={5}
        cols={50}
      />
      <br />
      <div className="btnDiv">
        <button className="button clearBtn" onClick={handleClearTextField}>
            Clear text field
        </button>
        <button className="button" onClick={handleCountWords}>
            Count Words
        </button>
      </div>
      <p className="word-count">
        Number of words: <CountUp end={wordCount} duration={2} />
      </p>
    </div>
  );
}

export default WordCountAssessment;
