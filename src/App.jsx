import React, { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [words, setWords] = useState([]);
  const colors = ['blue', 'red', 'green', 'orange', 'yellow'];

  // Simple gradient creator
  function createGradient() {
    if (words.length === 0) return '';

    let gradientParts = [];
    const anglePerSection = 360 / words.length;

    for (let i = 0; i < words.length; i++) {
      const start = i * anglePerSection;
      const end = (i + 1) * anglePerSection;
      gradientParts.push(`${colors[i % 5]} ${start}deg ${end}deg`);
    }

    return `conic-gradient(${gradientParts.join(', ')})`;
  }

  function play() {
    if (words.length === 0) {
      toast.error('Add some words first!');
      return;
    }

    const randomWord = words[Math.floor(Math.random() * words.length)];
    toast.success(`Your word is "${randomWord}"`);
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setWords(event.target.value.trim().split(' ').filter(word => word !== ''));
  };

  return (
    <div className="bg">
      <ToastContainer theme='dark' />
      <h2>Random word chooser <button className='info' onClick={() => toast.info('This is an app for learning words, you enter the text in the prompt, and boom, the app will choose a random word from the passage.')}>i</button></h2>
      <input
        type="text"
        placeholder='Your text here'
        value={inputValue}
        onChange={handleChange}
      />
      <div
        className="wheel"
        style={{ background: createGradient() }}
      >
        <button className='play' onClick={play}></button>
      </div>
        <button className='play'><a href=""><FontAwesomeIcon icon={faRotateRight} /></a></button>
    </div>
  )
}

export default App