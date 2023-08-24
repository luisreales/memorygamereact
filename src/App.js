import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { React, useState, useEffect } from 'react'
import SingleCard from './components/SingleCard'
import AlertMessage from './components/AlertMessage'
import axios from 'axios'
import LottieAnimation from './components/LottieAnimation'


// const cardImages = [
//   {
//     src: '/img/helmet-1.png',
//   },
//   {
//     src: '/img/potion-1.png',
//   },
//   {
//     src: '/img/ring-1.png',
//   },
//   {
//     src: '/img/scroll-1.png',
//   },
//   {
//     src: '/img/shield-1.png',
//   },
//   {
//     src: '/img/sword-1.png',
//   },
// ]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurn] = useState(0)
  const [matchedCount, setMatchedCount] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiseTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [name, setName] = useState('')
  const [storeName, setStoreName] = useState('')
  //const [entriesData,setEntries] = useState([])
  const [animals, setAnimals] = useState([])


  useEffect(() =>{ 
   
    const fetchingEntries = async() => {
    
      const apiURL = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20'
      
      try {
        const response = await axios.get(apiURL);
        const newEntriesData = await response.data.entries.map((entry) => ({
          src: entry.fields.image.url,
        }))
        await setAnimals(newEntriesData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchingEntries();
    //shuffeCards();
  },[storeName])


  useEffect(() => {
    if(animals.length > 0) {
      if(matchedCount === animals.length) {
        setShowAlert(true);
        resetTurn()
      }else{
        setShowAlert(false);
      }
    }
   
  },[matchedCount,animals])
  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiseTwo) {
      setDisabled(true)
      if (choiceOne.src === choiseTwo.src) {
        setMatchedCount((prev) => prev + 1)
        setTurn((prevTurns) => prevTurns - 1)
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return {
                ...card,
                matched: true,
              }
            } else {  
              return card
            }
          })
        })
        resetTurn()
       
      } else {
        setTimeout(() => {
          resetTurn()
        }, 1000)
      }
    }
  }, [choiceOne, choiseTwo, matchedCount])

  
  //validate user cache
  useEffect(() => {
    
    const storedName = localStorage.getItem('userName')
    if (storedName) {
      setStoreName(storedName)
    }
  }, [storeName])

  

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn((prevTurns) => prevTurns + 1)
    setDisabled(false)
  }
  //shuffle cards
  const shuffeCards =  () => {
    
    const cardsshuffled =  [...animals,...animals]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random(), matched: false }))
        
      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(cardsshuffled)
      setTurn(0)
      setMatchedCount(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

 

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('userName', name)
    setStoreName(name)
    alert('User' + name + ' saved locally')
  }
  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  
  

  return (
    <div className="App">
      <h1>Memory Card</h1>
      <div className="formUser">
        {storeName ? (
          <div className="container">
            <p>Hola, {storeName}!</p>
            <button onClick={shuffeCards}>Nuevo Juego</button>
            
            
            <table className="table table-sm table-style">
              <thead>
                <tr>
                  <th>Errores</th>
                  <th>Aciertos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='fail'>{turns}</td>
                  <td className='matched'>{matchedCount}</td>
                </tr>
              </tbody>
            </table>
            
            {showAlert && (
              <AlertMessage
                variant="primary"
                message="Hi Luis, You have won!!!"
                icon={ <LottieAnimation />}
              />
            )}
            <div className="card-grid">
              {cards.map((card) => (
                <SingleCard
                  key={card.id}
                  card={card}
                  handleChoice={handleChoice}
                  flipped={
                    card === choiceOne || card === choiseTwo || card.matched
                  }
                  disabled={disabled}
                />
              ))}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Ingrese su nombre : 
              <br /><input type="text" value={name} onChange={handleChangeName} />
            </label>
            <button type="submit">Save Name</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default App
