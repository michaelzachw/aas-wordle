import React, { useState, useEffect} from 'react';
import Select from 'react-select';
import './App.css';
import MyLineChart from './MyLineChart';

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderColor: 'gray',
    ':hover': {
      borderColor: 'blue'
    }
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? 'blue' : isFocused ? 'lightblue' : 'white',
    color: isSelected ? 'white' : 'black'
  })
};

const movies = [
  { value: 'blt', race: 1, modelminority: 10, gender: 5, neoliberalism: 0, sexuality: 0, label: 'Better Luck Tomorrow', img: "https://upload.wikimedia.org/wikipedia/en/0/08/Better_luck_tomorrow_poster001.jpg" },
  { value: 'eeaao', race: 8, modelminority: 6, gender: 7, neoliberalism: 3, sexuality: 10, label: 'Everything Everywhere All at Once', img: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg" },
  { value: 'akadb', race: 1, modelminority: 2, gender: 0, neoliberalism: 10, sexuality: 0, label: 'aka. Don Bonus', img: "https://m.media-amazon.com/images/M/MV5BMTU5NzkxNzA2OV5BMl5BanBnXkFtZTgwNDE4ODk1MDE@._V1_FMjpg_UX1000_.jpg" },
  { value: 'gt', race: 1, modelminority: 0, gender: 3, neoliberalism: 0, sexuality: 0, label: 'Gran Torino', img:"https://upload.wikimedia.org/wikipedia/en/c/c6/Gran_Torino_poster.jpg" },
  { value: 'minari', race: 5, modelminority: 7, gender: 8, neoliberalism: 3, sexuality: 0, label: 'Minari', img:"https://upload.wikimedia.org/wikipedia/en/8/8a/Minari_%28film%29.png" },
  { value: 'namesake', race: 2, modelminority: 1, gender: 1, neoliberalism: 1, sexuality: 1, label: 'Namesake', img:"https://upload.wikimedia.org/wikipedia/en/8/8b/The_Namesake.jpg" },
];

function App () {
  const [movieToGuess, setMovieToGuess] = useState({});
  const [guessEntries, setGuessEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [winState, setWinState] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isHowToOpen, setIsHowToOpen] = useState(false);
  
  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const openAbout = () => {
    setIsAboutOpen(true);
  };

  const closeAbout = () => {
    setIsAboutOpen(false);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openHowTo = () =>{
    setIsHowToOpen(true);
  };

  const closeHowTo = () =>{
    setIsHowToOpen(false);
  };

  // Modal component
  const Modal = ({onClose}) => {
    setGameOver(true);
    if(winState){
      return (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Congratulations!</h2>
            <img src={movieToGuess.img} alt={movieToGuess.label} width="259" height="383"></img>
            <p>You guessed the correct movie:</p>
            <p>{movieToGuess.label}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      );
    }
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Sorry!</h2>
          <img src={movieToGuess.img} alt={movieToGuess.label} width="259" height="383"></img>
          <p>You didn't guess the movie:</p>
          <p>{movieToGuess.label}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
    
  };

  useEffect(() => {
    setMovieToGuess(movies[Math.floor(Math.random() * movies.length)]);
  }, []);

  const addGuess = (selected) => {
    console.log(movieToGuess);
    if(guessEntries.some(obj => obj.movie === selected.label) || gameOver)
        return;
    if(selected.value === movieToGuess.value){
      setWinState(true);
      openModal();
    }
    if(guessEntries.length === 3){
      openModal();
    }
    const newGuess = {
      movie: selected.label,
      race: selected.race,
      modelminority: selected.modelminority,
      gender: selected.gender,
      neoliberalism: selected.neoliberalism,
      sexuality: selected.sexuality,
    }
    setGuessEntries([...guessEntries, newGuess])
  };
    return (
        <div className="homepage-container">
            <header className="header">
                <h1>Welcome to the AAS Wordle</h1>
                <nav>
                    <ul>
                        <li><a onClick={openAbout}>About</a></li>
                        <li><a href="/aas-wordle/">New Game</a></li>
                        <li><a onClick={openHowTo}>How To</a></li>
                    </ul>
                </nav>
            </header>

            <main className="main-content">
                <section className="intro">
                    <h2>Enter your guess</h2>
                    <p>Use the search below to enter a guess for the movie.</p>
                    <br></br>
                    <Select
                      styles={colourStyles}
                      onChange={addGuess}
                      options={movies}
                      isSearchable
                    />
                </section>

                <section className="guess-entries">
                    <h2>Guesses</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Movie</th>
                                <th>Race</th>
                                <th>Neoliberalism</th>
                                <th>Model Minority</th>
                                <th>Gender</th>
                                <th>Sexuality</th>
                            </tr>
                        </thead>
                        <tbody>
                          {guessEntries.map((entry, index) => (
                                <tr key={index}>
                                    <td style = {{color: "black"}}>{entry.movie}</td>
                                    <td style = {{backgroundColor: Math.abs(entry.race - movieToGuess.race) === 0 ? "green" : Math.abs(entry.race - movieToGuess.race) <= 2 ? "yellow" : "black"} }></td>
                                    <td style = {{backgroundColor: Math.abs(entry.neoliberalism - movieToGuess.neoliberalism) === 0 ? "green" : Math.abs(entry.neoliberalism - movieToGuess.neoliberalism) <= 2 ? "yellow" : "black"} }></td>
                                    <td style = {{backgroundColor: Math.abs(entry.modelminority - movieToGuess.modelminority) === 0 ? "green" : Math.abs(entry.modelminority - movieToGuess.modelminority) <= 2 ? "yellow" : "black"} }></td>
                                    <td style = {{backgroundColor: Math.abs(entry.gender - movieToGuess.gender) === 0 ? "green" : Math.abs(entry.gender - movieToGuess.gender) <= 2 ? "yellow" : "black"} }></td>
                                    <td style = {{backgroundColor: Math.abs(entry.sexuality - movieToGuess.sexuality) === 0 ? "green" : Math.abs(entry.sexuality - movieToGuess.sexuality) <= 2 ? "yellow" : "black"} }></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                
            </main>
            {isModalOpen && (
              <Modal onClose={closeModal} />
            )}

            {isAboutOpen && (
                    <div className="modal-overlay">
                      <div className="modal-content">
                        <h2>About</h2>
                        <p>This is a custom popup!</p>
                        <button onClick={closeAbout}>Close</button>
                      </div>
                    </div>
            )}

            {isHowToOpen && (
                    <div className="modal-overlay">
                      <div className="modal-content">
                        <h2>How To</h2>
                        <p><strong>GOAL:</strong> The goal of AAS Wordle is to guess the movie based off of how the movie you guessed relates to the key concepts of the target movie.</p>
                        <MyLineChart />
                        <button onClick={closeHowTo}>Close</button>
                      </div>
                    </div>
            )}
            <footer className="footer">
                <p>&copy; 2024 AAS Wordle</p>
            </footer>
        </div>
    );
};

export default App;
