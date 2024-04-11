import React, {useEffect, useState} from 'react'
import styles from './GenrePage.module.css';
import action from '../../assets/Action.png';
import drama from '../../assets/Drama.png';
import horror from '../../assets/Horror.png';
import fantasy from '../../assets/Fantasy.png';
import fiction from '../../assets/Fiction.png';
import music from '../../assets/Music.png';
import romance from '../../assets/Romance.png';
import thriller from '../../assets/Thriller.png';
import western from '../../assets/Western.png';
import { IoIosWarning } from "react-icons/io";

function GenerPage() {
    const genres = [
        {
            title: "Action", 
            bgImage: action
        },
        {
            title: "Drama", 
            bgImage: drama
        },
        {
            title: "Romance", 
            bgImage: romance
        },
        {
            title: "Thriller", 
            bgImage: thriller
        },
        {
            title: "Western", 
            bgImage: western
        },
        {
            title: "Horror", 
            bgImage: horror
        },
        {
            title: "Fantasy", 
            bgImage: fantasy
        },
        {
            title: "Music", 
            bgImage: music
        },
        {
            title: "Fiction", 
            bgImage: fiction
        }
    ]

    const bgColor =[
        "#FF5209",
        "#D7A4FF",
        "#148A08",
        "#84C2FF",
        "#902500",
        "#7358FF",
        "#FF4ADE",
        "#E61E32",
        "#6CD061",
    ]
    const [selectedGenre, setSelectedGenre] = useState([])
    function removeGenre(index){
        const newGenre = selectedGenre.filter((item) => item !== index)
        setSelectedGenre(newGenre)
    }
    function selectGenre(index){
        if(selectedGenre.includes(index)){
            return
        }else{
            // setSelectedGenre([...selectedGenre, index])
            setSelectedGenre((prev) => [...prev, index])
        }
    }

    useEffect(() => {
        if(selectedGenre.length >= 3){
            setLengthWarning(false)
        }
        localStorage.setItem("selectedGenres", JSON.stringify(selectedGenre))
        console.log(localStorage.getItem('selectedGenres'))
    }, [selectedGenre])
    

    const [lengthWarning, setLengthWarning] = useState(false)
    function handleNext(){
        if(selectedGenre.length < 3){
            setLengthWarning(true)
        } else{
            setLengthWarning(false)
        }
    }
  return (
    <div className={styles.page}>
        <div className={styles.left}>
            <h2>Super App</h2>
            <h1>Choose your entertainment category</h1>
            <div className={styles.selected}>
            {
                selectedGenre.map((item) => {
                    return(
                        <div key={item} className={styles.selectedGenre}>
                            {genres[item].title}
                            &nbsp;<span onClick={()=>removeGenre(item)}>X</span>
                        </div>
                    )
                })
            }
            </div>
            {lengthWarning && 
                <div className={styles.warning}>
                    <IoIosWarning /> <div> &nbsp; Minimum 3 categories required!</div>
                </div>}
        </div>
        <div className={styles.right}>
            <div className={styles.genreGrid}>
                {
                    genres.map((genre,index) => {
                        return(
                            <div key={index} className={styles.genreCard} onClick={() => selectGenre(index)}
                                style={{backgroundColor: bgColor[index], border: selectedGenre.includes(index)? "6px solid #11B800": ''}}
                            >
                                <div className={styles.title}>{genre.title}</div>
                                <img src={genre.bgImage} alt="bgImage" />
                            </div>
                        )
                    })
                }
            </div>
            <button className={styles.button} onClick={handleNext}>Next Page</button> 
        </div>
    </div>
  )
}

export default GenerPage