import { useState } from 'react';
import { Button } from './components/Button';
import withStyled from './HOC/withStyled';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <Button label="Increment" onClick={() => setCount(count + 1)} />
      <Button label="Decrement" onClick={() => setCount(count - 1)} />
    </>
  );
}

export default withStyled(App);
