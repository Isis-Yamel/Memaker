import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries.js';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MemeBoard from './components/MemeBoard/MemeBoard';

import './App.scss';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app_layout">
        <Header/>
        <MemeBoard/>
        <Footer/>
      </div>
    </ApolloProvider>
  );
};

export default App;
