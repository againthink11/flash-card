import { useState } from "react";
import Carousel from "./components/BackCard";

function App() {
  const cardsData = [
    {id: 1, question: 'What Language is React based on ?', answer : 'Java Script'},
    {id: 2, question: 'Js is single threat or multi threat ?', answer : 'Single threat'},
    {id: 3, question: 'React is Library or Framework ?', answer : 'Library'},
    {id: 4, question: 'Js is single threat or multi threat ?', answer : 'Single threat'},
    {id: 5, question: 'Js is single threat or multi threat ?', answer : 'Single threat'},
    {id: 6, question: 'Js is single threat or multi threat ?', answer : 'Single threat'},
    {id: 7, question: 'Js is single threat or multi threat ?', answer : 'Single threat'},
    {id: 8, question: 'Js is single threat or multi threat ?', answer : 'Single threat'},
    {id: 9, question: 'Js is single threat or multi threat ?', answer : 'Single threat'},
    {id: 10, question: 'Js is single threat or multi threat ?', answer : 'Single threat'},
    {id: 11, question: 'Js is single threat or multi threat ?', answer : 'Single threat'},
    {id: 12, question: 'Js is single threat or multi threat ?', answer : 'Single threat'},
  ]
  const [showAnswer, setShowAnswer] = useState(null)
  const handleShowAnswer = (id) => {
    setShowAnswer(id != showAnswer ? id : null)
    
  }
  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:'10px', padding:"20px"}}>
      {cardsData.map((item) => <button style={ item?.id === showAnswer ? {background:"red", border:'1px solid red', padding:'45px', borderRadius:'10px', minWidth:"400px"} : {border:'1px solid gray', padding:'45px', borderRadius:'10px', minWidth:"400px"}} onClick={() => handleShowAnswer(item.id)}>{item.id === showAnswer ? item.answer : item.question}</button>)}
    </div>
    // <Carousel/>
  );
}

export default App;
