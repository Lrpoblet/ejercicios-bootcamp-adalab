import { useState } from 'react';

function App() {
  const [cont, setCont] = useState(0);

  const handleIncreaseBtn = () => {
    setCont(cont + 1);
  };

  const handleReduceBtn = () => {
    if (cont > 0) {
      setCont(cont - 1);
    }
  };

  const handleResetBtn = () => {
    setCont(0);
  };

  return (
    <div>
      <p>Contador: {cont}</p>
      <button onClick={handleIncreaseBtn}>Incrementar</button>
      <button onClick={handleReduceBtn}>Reducir</button>
      <button onClick={handleResetBtn}>Resetear</button>
    </div>
  );
}

export default App;
