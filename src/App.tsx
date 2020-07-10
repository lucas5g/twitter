import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './Components/Layout';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Layout />
      <GlobalStyles />
    </>
  )
}

export default App;