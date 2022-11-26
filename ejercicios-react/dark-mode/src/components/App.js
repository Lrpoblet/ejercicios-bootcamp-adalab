import { useState } from 'react';
import '../styles/App.css';

function App() {
  const [dark, setDark] = useState(true);
  const [textStatus, setTextStatus] = useState('Tienes activado el dark mode');

  const handleClick = () => {
    if (dark) {
      setDark(false);
      setTextStatus('');
    } else {
      setDark(true);
      setTextStatus('Tienes activado el dark mode');
    }
  };

  return (
    <div className={dark ? 'status' : 'null'}>
      <button onClick={handleClick}>Des/activar el dark mode</button>
      {textStatus}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias optio
        vitae praesentium natus! Sequi quas sit modi? Explicabo tenetur enim
        nesciunt ex velit corrupti, consequuntur voluptate eligendi magni
        consequatur.
      </p>
    </div>
  );
}

export default App;
