import './MemeBoard.scss';

import { useMemes } from '../../graphql/hooks.js';

const MemeBoard = () => {
  const { memes, loading, error } = useMemes();

  console.log(memes, loading, error);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, something went wrong.</p>;
  }

  return (
   <section className='meme-board_wrapper'>
     {memes.map(meme => (
       <div key={meme.id}>
         <h2>{meme.name}</h2>
         <img src={meme.image} alt={meme.name}/>
         <p>{meme.memeText}</p>
       </div>
     ))}
   </section>
  );
};

export default MemeBoard;