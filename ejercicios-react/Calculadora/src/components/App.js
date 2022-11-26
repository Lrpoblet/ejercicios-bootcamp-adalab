import { useState } from 'react';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [op, setOp] = useState('suma');
  let total = 0;

  const handleNumberA = (ev) => {
    const inputValue = ev.target.value;
    setNumberA(inputValue);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  const handleOp = (ev) => {
    setOp(ev.target.value);
  };

  const calc = () => {
    if (op === 'suma') {
      total = parseInt(numberA) + parseInt(numberB);
    } else if (op === 'resta') {
      total = parseInt(numberA) - parseInt(numberB);
    } else if (op === 'multiplicación') {
      total = parseInt(numberA) * parseInt(numberB);
    } else if (op === 'división') {
      total = parseInt(numberA) / parseInt(numberB);
    }
    return total;
  };

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <label htmlFor="op">Operaciones:</label>
        <select name="op" id="op" value={op} onChange={handleOp}>
          <option value="suma">suma</option>
          <option value="resta">resta</option>
          <option value="multiplicación">multiplicación</option>
          <option value="división">división</option>
        </select>
        <label>
          Escribe un número:
          <input type="number" onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input type="number" onChange={handleNumberB} />
        </label>
      </form>
      <p>
        La {op} de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {calc()}</strong>.
      </p>
    </div>
  );
};

export default App;
