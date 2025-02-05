import { useState } from "react";
import ImageCard from "./Components/ImageCard/ImageCard"



function App() {

  const [quote, setQuote] = useState('');
 
  return (
    <>
      <ImageCard quote={quote} setQuote={setQuote}/>
    </>
  )
}

export default App
