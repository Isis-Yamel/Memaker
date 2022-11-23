import './MemeBoard.scss';

import { useMemes, useCreateMeme } from '../../graphql/hooks.js';

const MemeBoard = () => {
  const { memes, loading, error } = useMemes();
  // loading prop to disable button on submit
  const { createMeme } = useCreateMeme();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, something went wrong.</p>;
  }

  const handler = async (event) => {
    event.preventDefault();
    const meme = await createMeme('This is a name', 'http://imgflip.com/s/meme/Grumpy-Cat.jpg');
    console.log(meme);
  }

  return (
   <section>
     <button onClick={handler}> Test Create</button>
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