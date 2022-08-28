import {useEffect, useState} from 'react';


function App() {
  const [torr, setTorr] = useState([])
  async function getTrending(){
    try{
      let res = await fetch("https://torrento.vercel.app/trending")
      res = await res.json()
      setTorr(res.items)
    } catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    getTrending()
  }, [])

  return (
    <div className="App">
      <h1>Trending</h1>
      {torr.length > 0 ? torr.map((l) => <p>{l.name}</p>) : <p>Nothing to display for now!</p>}
    </div>
  );
}

export default App;