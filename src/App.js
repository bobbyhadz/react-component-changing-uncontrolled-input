import './App.css';

import {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState();

  const handleChange = event => {
    setMessage(event.target.value);

    console.log(event.target.value);
  };

  // 👇️  value={message || ''}

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message || ''}
      />
    </div>
  );
};

export default App;
