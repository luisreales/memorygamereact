import './App.css'
import { React, useState, useEffect } from 'react'
import SingleCard from './components/SingleCard'
import AlertMessage from './components/AlertMessage'

const cardImages = [
  {
    src: '/img/helmet-1.png',
  },
  {
    src: '/img/potion-1.png',
  },
  {
    src: '/img/ring-1.png',
  },
  {
    src: '/img/scroll-1.png',
  },
  {
    src: '/img/shield-1.png',
  },
  {
    src: '/img/sword-1.png',
  },
]

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

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiseTwo) {
      setDisabled(true)
      if (choiceOne.src === choiseTwo.src) {
        setMatchedCount(matchedCount + 1)
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

  //start a new game automatically
  useEffect(() => {
    shuffeCards()
  }, [])
  //validate user cache
  useEffect(() => {
    debugger
    const storedName = localStorage.getItem('userName')
    if (storedName) {
      setStoreName(storedName)
    }
  }, [storeName])

  console.log(cards)

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn((prevTurns) => prevTurns + 1)
    setDisabled(false)
  }
  //shuffle cards
  const shuffeCards = () => {
    const cardsshuffled = [...cardImages, ...cardImages]
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

  const handleShowAlert = () => {
    setShowAlert(true)
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
            <p>Hello, {storeName}!</p>
            <button onClick={shuffeCards}>New Game</button>
            <button onClick={handleShowAlert}>Show Alert</button>
            {showAlert && (
              <AlertMessage
                variant="primary"
                message="Hi Luis, You have won!!!"
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

            <table className="table">
              <thead>
                <tr>
                  <th>Failed</th>
                  <th>Matched</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{turns}</td>
                  <td>{matchedCount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Enter your name:
              <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <button type="submit">Save Name</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default App
