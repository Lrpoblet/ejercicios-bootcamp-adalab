import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleInput = (ev) => {
    const text = (
      <p>
        La última tecla pulsada ha sido: <strong>{ev.key.toUpperCase()}</strong>{' '}
        (keyCode: {ev.keyCode})
      </p>
    );
    setInput(text);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="key"
          name="key"
          placeholder="Pulsa tecla"
          onKeyUp={handleInput}
        />
      </form>
      {input}
    </div>
  );
}

export default App;
