import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries.js';

import Create from './components/CreateMeme/CreateMeme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MemeBoard from './components/MemeBoard/MemeBoard';

import './App.scss';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app_layout">
        <Header/>
        <main className='meme-board_wrapper'>
          <Routes>
            <Route path='/' element={<MemeBoard/>}/>
            <Route path='create' element={<Create/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </ApolloProvider>
  );
};

export default App;
