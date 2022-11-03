import React, { useContext, useState } from 'react';
import UserContext from './components/helper/userContext';

const Parent = () => {
  const [username, setUsername] = useState('PedroTech');
  const [count, setCount] = useState(0);

  return (
    <UserContext.Provider value={{ username, setUsername, count, setCount }}>
      <Child1 />
      <Child2 />
      <Child3 />
      <Child4 />
    </UserContext.Provider>
  );
};

export const Child1 = () => {
  const { username } = useContext(UserContext);

  return <h1>{username}</h1>;
};

export const Child2 = () => {
  const { setUsername } = useContext(UserContext);

  return (
    <button
      onClick={() => {
        setUsername('PedroTechnologies');
      }}
    >
      Change Username
    </button>
  );
};

export const Child3 = () => {
  const { count } = useContext(UserContext);

  return <h3>{count}</h3>;
};

export const Child4 = () => {
  const { setCount } = useContext(UserContext);

  return (
    <button
      onClick={() => {
        setCount((c) => c + 1);
      }}
    >
      Change Count
    </button>
  );
};

export default Parent;
