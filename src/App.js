import React, { useState, useEffect} from 'react';
import Select from 'react-select';
import './App.css';
import MyLineChart from './MyLineChart';
import SpoilerButton from './Spoiler';

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
  { value: 'blt', 
    race: 2, 
    modelminority: 3, 
    gender: 1, 
    neoliberalism: 0, 
    sexuality: 0, 
    label: 'Better Luck Tomorrow', 
    img: "https://upload.wikimedia.org/wikipedia/en/0/08/Better_luck_tomorrow_poster001.jpg", 
    summary:"Better Luck Tomorrow (2002), directed by Justin Lin, is a groundbreaking film that challenges the pervasive “model minority” stereotype (Bballmagic24, 2024) associated with Asian Americans. The film is about the lives of a group of high-achieving Asian American high school students who got good grades at school but secretly engaged in criminal behavior.",  
    analysis:`The film critiques the suffocating nature of the model minority stereotype, showing how it reduces individuals to their achievements and denies them the full range of human experience.
      
    We rate the film's critique of the "Model Minority" stereotype as 3. The rebellious Asian characters defy the American stereotype of Asian American men as nerdy and feminine. This deliberate subversion is significant. It invites viewers to rethink broader racial and cultural expectations placed on marginalized groups.
      
    We rate “Gender” as 1 because there is also concepts of objectifying girls in the movie. For example, Stephanie Vandergosh, the most prominent female character in the film, is largely defined by her relationships with the male characters, particularly Ben and Steve. Stephanie serves as both a love interest and a symbolic representation of Ben's aspirations and insecurities. While she exhibits moments of independence, her character ultimately functions more as a narrative device to highlight Ben's internal struggles rather than as a fully realized individual with her own agency. This dynamic reduces her to an object of affection and desire, sidelining her potential complexity.`,
    sources:`Bballmagic24. (2014, August 8). Better luck tomorrow: How the model minority myth turns straight A students into criminals. The Artifice. https://the-artifice.com/better-luck-tomorrow-minority-myth-criminals/
    
    Zhang, Q. (2010). Asian Americans Beyond the Model Minority Stereotype: The Nerdy and the Left Out. Journal of International and Intercultural Communication, 3(1), 20-37. https://doi.org/10.1080/17513050903428109`
  },
  { value: 'eeaao', 
    race: 2, 
    modelminority: 1, 
    gender: 3, 
    neoliberalism: 1, 
    sexuality: 3, 
    label: 'Everything Everywhere All at Once', 
    img: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg", 
    summary:"Directed by Daniel Kwan and Daniel Scheinert, Everything Everywhere All at Once is a groundbreaking film that explores the complex dynamics of identity, family, and cultural expectations through a multiverse-spanning narrative. At its core, the film focuses on the journey of Evelyn Wang, a Chinese-American immigrant, as she struggles with multiple crises from the tax problem of their laundry shop and the terrible and tense relationship with her daughter.", 
    analysis:`We rate the “Race” concept as 2 out of (-3~3) because it subvert the race key concept, especially to the American Chinese. Starting from the family relationship, Evelyn Wang has a traditional Chinese family which have rules and traditional job expectations for girls. However, Evelyn Wang escaped from her original family but happened to step into a similar track where she put too much expectation on her daughter and caused much pressure and tension through family relationships. This follows normal definitions from model minority, also a very important part for considering whether the Race concept is subverted. One thing different is that her daughter responds fiercely, with all kinds of fancy scenes with wide imagination pointing at rebellion to the expectation of her mother.
    
    We also rate “Gender” as 2 partly because Evelyn Wang's diverse characteristics. On the one hand, she is the family charger dealing with all the staff with the Laundry shop. On the other hand, she is a traditional mother who holds high standards for her daughter. She is like a superwoman dealing all the staff at the same time. It is a great convert to the concept of Gender defined I, especially in the Patriarchal Society.` },
  { value: 'akadb', 
    race: 1, 
    modelminority: 1, 
    gender: 0, 
    neoliberalism: 3, 
    sexuality: 0, 
    label: 'aka. Don Bonus', 
    img: "https://m.media-amazon.com/images/M/MV5BMTU5NzkxNzA2OV5BMl5BanBnXkFtZTgwNDE4ODk1MDE@._V1_FMjpg_UX1000_.jpg", 
    summary:"a.k.a. Don Bonus is a video-journal documentary about the life of Sokly Ny (Don Bonus), a Cambodian refugee following his family due to war. The film depicted his senior year of high school. It portrayed how everything that happened to Don Bonus during this year, such as the poverty his family faces, strange relationships within his family, and systemic difficulties for him and his family.", 
    analysis:"",
    sources:"" },
  { value: 'gt', 
    race: -2, 
    modelminority: 0, 
    gender: -2, 
    neoliberalism: 0, 
    sexuality: -3, 
    label: 'Gran Torino', 
    img:"https://upload.wikimedia.org/wikipedia/en/c/c6/Gran_Torino_poster.jpg",
    summary:"",
    analysis:"",
    sources:""  },
  { value: 'minari', 
    race: -1, 
    modelminority: 2, 
    gender: 3, 
    neoliberalism: 2, 
    sexuality: 0, 
    label: 'Minari', 
    img:"https://upload.wikimedia.org/wikipedia/en/8/8a/Minari_%28film%29.png",
    summary:"Minari follows a Korean American family that moves from California to Arkansas where the father wants to start a farm and grow Korean crops. The son has a heart condition that is a constant point of stress and anxiety. Meanwhile, the grandmother of the family joins them in Arkansas and does not gel with the son that she must share a room with. These problems between family members serve as the main conflict of the film.",
    analysis:`The main key concept that this film challenges is gender, which garners it a score of 3. Due to financial hardships, the father focuses more on the success of the farm rather than keeping the family stable amongst the son’s health problems. While this points to an absent father stereotype that is commonly seen in Asian American films, the mother does not accept that the father does not put the family’s cohesion as his main priority. This culminates in the mother and father deciding to separate, circumventing the concept that an absent father is acceptable in Asian American households. 
    
    The second key concept that the film challenges is the model minority concept, which gets a score of 2. Throughout the film, the family is constantly struggling with finances which causes the father to try to be an entrepreneur. This plays into the model minority concept, however, the ending scene betrays the film’s true intent. During the film, the grandmother suffers a stroke that leaves her disabled. After she accidentally starts a fire that destroys the crops, she attempts to run away in shame. The son and daughter run to catch her and bring her back home. After the fire is extinguished, the family sleeps together on the floor of the living room with the grandmother looking at them affectionately. This scene symbolizes the family bonding together and growing closer despite these hardships. The film shows how despite all the family’s struggles regarding money and a disaster that exacerbates those issues, the most important focus is family. 
    
    The film also challenges neoliberalism. The family constantly comes into problems that they believe have to be fixed on their own. This plays into neoliberalism’s core tenet of self-reliance and independence. The father focusing on becoming an entrepreneur to keep his family afloat also plays into the neoliberalism tenets. Wonjeong Kim talks about how mobility plays a significant role in the film, explaining how “The Yi family who probably failed to become a typical model minority in urban California moves to the rural space to reattempt mobility.” This shows how neoliberalism makes minorities believe that they must work themselves to achieve prosperity, and despite this belief, these core tenets of neoliberalism do not result in a desired result. `,
    sources:`Kim, Wonjeong. "Cultivating Land and Reclaiming Mobility: Asian American Mobility of Rural and Urban Spaces in Minari: America is founded on myths of mobility.-Sau-ling Cynthia Wong (118)." Journal of Ethnic American Literature 13 (2023). ` },
  { value: 'namesake', 
    race: 3, 
    modelminority: 1, 
    gender: 1, 
    neoliberalism: 0, 
    sexuality: 0, 
    label: 'Namesake', 
    img:"https://upload.wikimedia.org/wikipedia/en/8/8b/The_Namesake.jpg", 
    summary:"The movie is mainly about the life stories of two Generations of Indian Americans. Ashoke, as a first-generation Indian American, follows the cultural rule of marrying an Indian wife while his son, Gogol tries to escape from the cultural limitations but in the end compromises and marries an Indian American after Ashoke passes away.", 
    analysis:`The movie with a deep thinking of maintaining the family culture from India in America challenges the “race” concept strongly. The assimilation process for Asian Americans can lead to the adoption of American cultural practices, sometimes at the expense of traditional customs (Abramitzky, 2017). The movie shows a strong will to maintain the Indian traditional Culture with frequent family trips back to India even if their sons and daughters are born and raised mostly in the United States.
   
    We rate “race” as 3 out of (-3~3), which means that the movie challenges the key concept in very strong way. The main character in this film, Gogol, ends up compromising to the Indian culture, especially in the marriage, after a series of hard choices. Gogol turns to obey the cultural manners he once disliked after his father's death but is unfortunately betrayed by his Indian wife, leaving an open ending for audiences to reflect on the struggles of Asian Americans to balance between the American culture and their own cultural identity. The loyalty of their “father's” culture led to an unhappy ending for Gogol, but the will for Gogol to maintain India culture and ethics is strong and meaningful compared with other Asians who try their best to fit into the American culture and left all their treasurable Asian culture far behind.
    
    We rate 1 for the concept of “Gender”. The film explores gender dynamics primarily through the character of Ashima Ganguli, Gogol's mother, who begins as a traditional Bengali wife and adapts to an unfamiliar life in America. Her journey toward independence and self-discovery, particularly after her husband's death, challenges traditional gender roles and showcases her resilience. However, conventional gender expectations, especially in the early portrayal of Ashima's deference to her husband's decisions and her role as the emotional anchor for her family are still traditional Patriarchal Society (Mahmud, 2012).`,
    sources:`Abramitzky, R. (April, 2017). What history tells us about the assimilation of immigrants. Stanford Institute for Economic Policy Research. https://siepr.stanford.edu/news/what-history-tells-us-about-assimilation-immigrants
    
    Mahmud, S. (2012). The patriarchal society and women’s subordination: A theoretical analysis. Asian Affairs, 4, 98–113. https://doi.org/10.3329/afj.v4i0.12929`},
  { value: 'yf', 
    race: -3, 
    modelminority: 0, 
    gender: -3, 
    neoliberalism: -3, 
    sexuality: -1, 
    label: 'Yellow Fever', 
    img:"https://i.ytimg.com/vi/vC_ycDO66bw/hqdefault.jpg",  
    summary:"This short film posted on YouTube by Wong Fu Production explores the dynamics of interracial dating especially on the lack of desirability for Asian men using a funny and satire method throughout the short film. At the end, the film uses the “brown voice” from Phil’s Indian American friend to address this problem onto each individual instead of stereotypes of Asian Men as a whole.",
    analysis:`Although it is clear that the film aimed to address racial and gender issues of Asian Americans, the film reinforce the stereotypes of race, gender and neoliberalism, receiving  -3 rating for all these key concepts.
    
    The film reaffirms racial hierarchies rather than critiquing them. For example, the scene where Andrew, Phil’s white friend, effortlessly attracts two Asian American women by simply making a sandwich, reinforces the idea that white men are inherently more attractive. This effortless desirability contrasts sharply with Phil’s struggles to connect with women and instead of addressing stereotypes, reaffirms them. As Cindy Gao notes, the scene highlights “white men’s dominance in the hierarchy of desirability” (Gao, Sfonline).
    
    In addition, the film perpetuates Orientalist stereotypes about Asian women. They are depicted as passive objects of male desire, same with the “lotus blossom” stereotypes. Furthermore, all the women in the film are thin, have long, straight black hair, and lack any  character agency. This depiction not only reinforces limiting beauty ideals but also reflects a male centered lenses, reducing Asian women to accessories in interracial dating dynamics (Gao, Sfonline).
    
    Lastly, the film solely accuse the asexualization of Asian men on self-responsibility. The underlying flaw of this assumption highlight the movie’s dismissal of the systemic inequalities Asian American youth faces, which aligns with the idea of neoliberal ideologies that prioritize personal accountability over the bigger picture of structural composition.
    
    Overall, despite the popularity and the intention of the short film, the movie still fail short on addressing the problem Wong Fu Production wants with consideration of limitation of the genre context.`,
    sources:"Gao, C. (n.d.). The virtuosic virtuality of Asian American YouTube stars. The Scholar & Feminist Online. Retrieved from https://sfonline.barnard.edu/the-virtuosic-virtuality-of-asian-american-youtube-stars/ "
  },
  { value: 'htbg', 
    race: 0, 
    modelminority: -3, 
    gender: -3, 
    neoliberalism: 0, 
    sexuality: 0, 
    label: 'How To Be Gangster', 
    img:"https://i.ytimg.com/vi/khFhF64P3VQ/hqdefault.jpg",
    summary:"Ryan Higa’s How to Be Gangster is a short YouTube video that humorously shows steps on how to become a gangster. These steps include dressing in the gangster way, having specific slang to themselves, and aggressive attitudes. ",
    analysis:`This short film with its purpose of being funny and satirical made its content to significantly reinforces the Asian American male stereotypes and anti-blackness, earning –3 on race and gender. Its contents perpetuate harmful depictions of African American male being hyper aggressive, which along with the long-standing anti-black narratives in American media. Furthermore, the video started with a weak and unable to defend himself character of an Asian American male that reinforces the weak masculinity (Gao, Sfonline).
    
    The YouTube channel name of Ryan Higa's NigaHiga can be see as an close copy of the n-word. This naming not only exacerbates the video’s content of anti-blackism but also reflects the lack of cultural consideration. And ultimately, many of the earlier Asian American youth content on YouTube may succussed in introducing a more diverse Asian life to the community, their approach often reinforcing racial hierarchies and ignores the actual issues underlying (Gao, Sfonline).`,
    sources: `Gao, C. (n.d.). The virtuosic virtuality of Asian American YouTube stars. The Scholar & Feminist Online. Retrieved from https://sfonline.barnard.edu/the-virtuosic-virtuality-of-asian-american-youtube-stars/ ` },
  { value: 'hakgtwc', 
    race: -2, 
    modelminority: -1, 
    gender: -3, 
    neoliberalism: -2, 
    sexuality: -2, 
    label: 'Harold and Kumar Go To White Castle', 
    img:"https://upload.wikimedia.org/wikipedia/en/7/72/Harold_%26_Kumar_Go_to_White_Castle.JPG",
    summary:`Harold and Kumar Go to White Castle follows two Asian American friends getting high and embarking on an eventful journey to White Castle to satisfy their cravings. The two eponymous friends are both successful and educated, with Harold being an investment banker and Kumar being in medical school. Despite this, Harold and Kumar’s journey entails events that are much less esteemed than they appear, such as getting arrested and stealing identity to obtain medical marijuana. `,
    analysis:`Due to the film having much of its humor being derived from the stereotypes of Asian Americans, the scores for the key concepts all show that the film reinforces preconceived perceptions of the key concepts. Harold in the film specifically is the subject of most of these stereotypes. He is a mild-mannered, hardworking Korean American man that fears talking to his crush and tries to stay out of trouble as much as he can, even trying not to jaywalk.
    
    Kumar, on the other hand, is an Indian American who serves as almost the complete antithesis to Kumar. He is still educated but is much more outgoing and prone to get into trouble than Harold. Regardless, Kumar still represents an Indian American that has assimilated to white American culture (Rahmani, 160) and that wants to become a doctor at the end of the film (despite reluctance due to not wanting to play into Asian American stereotypes).`,
    sources:`Rahmani, Sina. "Hollywood and Diversity: Subversion, Apologetic, or Both? Harold and Kumar Go to White Castle. Dir. Danny Leiner. New Line Cinema, 2004 [Book review]." ` },
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
            <p>You guessed the correct movie: <strong>{movieToGuess.label}</strong></p>
            <p><strong>Scores</strong></p>
            <p><strong>Race: </strong>{movieToGuess.race}</p>
            <p><strong>Neoliberalism: </strong>{movieToGuess.neoliberalism}</p>
            <p><strong>Model Minority: </strong>{movieToGuess.modelminority}</p>
            <p><strong>Gender: </strong>{movieToGuess.gender}</p>
            <p><strong>Sexuality: </strong>{movieToGuess.sexuality}</p>
            <p><strong>Summary: </strong>{movieToGuess.summary}</p>
            {movieToGuess.value !== "minari" && movieToGuess.value !== "hakgtwc" ? <p><strong>Analysis: </strong>{movieToGuess.analysis}</p> : <SpoilerButton spoilerText={movieToGuess.analysis}/>}
            <p><strong>Sources: </strong>{movieToGuess.sources}</p>
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
          <p>You didn't guess the movie: <strong>{movieToGuess.label}</strong></p>
          <p><strong>Scores</strong></p>
          <p><strong>Race: </strong>{movieToGuess.race}</p>
          <p><strong>Neoliberalism: </strong>{movieToGuess.neoliberalism}</p>
          <p><strong>Model Minority: </strong>{movieToGuess.modelminority}</p>
          <p><strong>Gender: </strong>{movieToGuess.gender}</p>
          <p><strong>Sexuality: </strong>{movieToGuess.sexuality}</p>
          <p><strong>Summary: </strong>{movieToGuess.summary}</p>
          {movieToGuess.value !== "minari" && movieToGuess.value !== "hakgtwc" ? <p><strong>Analysis: </strong>{movieToGuess.analysis}</p> : <SpoilerButton spoilerText={movieToGuess.analysis}/>}
          <p><strong>Sources: </strong>{movieToGuess.sources}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
    
  };

  useEffect(() => {
    setMovieToGuess(movies[Math.floor(Math.random() * movies.length)]);
  }, []);

  const addGuess = (selected) => {
    if(guessEntries.some(obj => obj.movie === selected.label) || gameOver)
        return;
    if(selected.value === movieToGuess.value){
      setWinState(true);
      openModal();
    }
    if(guessEntries.length === 4){
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
                <h1>Welcome to AAS Wordle</h1>
                <nav>
                    <ul>
                      <li><a href="/aas-wordle/">New Game</a></li>
                      <li><a onClick={openHowTo}>How To</a></li>
                      <li><a onClick={openAbout}>About</a></li>
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
                                <th width="125px">Movie</th>
                                <th width="125px">Race</th>
                                <th width="125px">Neoliberalism</th>
                                <th width="125px">Model Minority</th>
                                <th width="125px">Gender</th>
                                <th width="125px">Sexuality</th>
                            </tr>
                        </thead>
                        <tbody>
                          {guessEntries.map((entry, index) => (
                                <tr key={index}>
                                    <td width="125px" height="70px" style = {{color: "black"}}>{entry.movie}</td>
                                    <td width="125px" height="70px" style = {{backgroundColor: Math.abs(entry.race - movieToGuess.race) === 0 ? "#019a01" : Math.abs(entry.race - movieToGuess.race) <= 1 ? "#ffc425" : "black"} }>{Math.abs(entry.race - movieToGuess.race) === 0 ? <p>{movieToGuess.race}</p> : ""}</td>
                                    <td width="125px" height="70px" style = {{backgroundColor: Math.abs(entry.neoliberalism - movieToGuess.neoliberalism) === 0 ? "#019a01" : Math.abs(entry.neoliberalism - movieToGuess.neoliberalism) <= 1 ? "#ffc425" : "black"} }>{Math.abs(entry.neoliberalism - movieToGuess.neoliberalism) === 0 ? <p>{movieToGuess.neoliberalism}</p> : ""}</td>
                                    <td width="125px" height="70px" style = {{backgroundColor: Math.abs(entry.modelminority - movieToGuess.modelminority) === 0 ? "#019a01" : Math.abs(entry.modelminority - movieToGuess.modelminority) <= 1 ? "#ffc425" : "black"} }>{Math.abs(entry.modelminority - movieToGuess.modelminority) === 0 ? <p>{movieToGuess.modelminority}</p> : ""}</td>
                                    <td width="125px" height="70px" style = {{backgroundColor: Math.abs(entry.gender - movieToGuess.gender) === 0 ? "#019a01" : Math.abs(entry.gender - movieToGuess.gender) <= 1 ? "#ffc425" : "black"} }>{Math.abs(entry.gender - movieToGuess.gender) === 0 ? <p>{movieToGuess.gender}</p> : ""}</td>
                                    <td width="125px" height="70px" style = {{backgroundColor: Math.abs(entry.sexuality - movieToGuess.sexuality) === 0 ? "#019a01" : Math.abs(entry.sexuality - movieToGuess.sexuality) <= 1 ? "#ffc425" : "black"} }>{Math.abs(entry.sexuality - movieToGuess.sexuality) === 0 ? <p>{movieToGuess.sexuality}</p> : ""}</td>
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
                        <p><strong>Welcome to AAS Wordle!</strong></p>
                        <p>The purpose of this game is for students to compare and contrast movies that we watched for class, and some other films, according to how they represent 5 key concepts: race,
                          neoliberalism, model minority, gender, and sexuality.</p>
                        <p>The comparisons are made based off of whether the films challenge or reinforce our preconceived notions of the key concepts. This shows the scope of how the films we discussed in class
                          represent the key concepts. It helps us understand the different ways Asian American youth can be represented in film.
                        </p>
                        <p>This game also allows students to think critically about the films and understand how some films on the surface may seem very different or very similar, but are the opposite.
                          The comparisons let students think about the field of Asian American films holistically, while still analyzing each film on its own.
                        </p>
                        <p></p>
                        <button onClick={closeAbout}>Close</button>
                      </div>
                    </div>
            )}

            {isHowToOpen && (
                    <div className="modal-overlay">
                      <div className="modal-content">
                        <h2>How To</h2>
                        <p><strong>GOAL: </strong>The goal of AAS wordle is to guess a random target movie by guessing other movies and seeing how similarly they represent key concepts compared to the target movie.</p>
                        <p>The scale shown below is how the movies are scored. A high value means that the movie challenges our preconceived perceptions of the key concepts. For example, a common stereotype is that 
                          Asian American families have to be model minorities. A film that shows an Asian American family not conforming to the model minority standard would have a high score. A film that showing the opposite
                          would have a low score.
                        </p>
                        <MyLineChart/>
                        <p>After you guess a movie, colored boxes will show up showing whether the film that you guessed represents the key concepts in the same way, similar way, or much different way, compared to the target movie.</p>
                        <p><strong><span style={{color:"#019a01"}}>GREEN</span></strong> means that the movie you guessed represents the key concept the same way the target movie does. The score for
                        the movie will be revealed.</p>
                        <p><strong><span style={{color:"#ffc425"}}>YELLOW</span></strong> means that the movie you guessed represents the key concept the similarly to the target movie, but not exactly. The score for the target movie is one point away. The score for
                        the movie will be <strong>not</strong> revealed.</p>
                        <p><strong><span style={{color:"black"}}>BLACK</span></strong> means that the movie you guessed represents the key concept much differently than the target movie. The score is 2 or more points away. The score for
                        the movie will be <strong>not</strong> revealed.</p>
                        <button onClick={closeHowTo}>Close</button>
                      </div>
                    </div>
            )}
        </div>
    );
};

export default App;
