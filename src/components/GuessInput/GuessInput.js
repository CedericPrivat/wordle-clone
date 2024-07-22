import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        title='5 letter word'
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern='[a-zA-Z]{5}'
        required
      />
    </form>
  );
}

export default GuessInput;
