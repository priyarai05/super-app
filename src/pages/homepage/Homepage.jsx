import React, { useEffect, useState } from 'react'
import styles from './Homepage.module.css'
import userAvtar from '../../assets/image 14.png'
import axios from 'axios'
import Weather from '../weather/Weather'
import News from '../news/News'
import User from '../user/User'

function Homepage() {
    const NEWS_API = process.env.REACT_APP_NEWS_API_KEY
    const WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY
    const [user, setUser] = useState([])
    const [selectedGenre, setSelectedGenre] = useState([])
    const genres = [
        {
            title: "Action",
        },
        {
            title: "Drama",
        },
        {
            title: "Romance",
        },
        {
            title: "Thriller",
        },
        {
            title: "Western",
        },
        {
            title: "Horror",
        },
        {
            title: "Fantasy",
        },
        {
            title: "Music",
        },
        {
            title: "Fiction",
        }
    ]
    const [weather, setWeather] = useState()
    const [news, setNews] = useState()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("currentUser")))
        setSelectedGenre(JSON.parse(localStorage.getItem("selectedGenres")))
        fetchWeatherData()
        fetchNews()
        // console.log(process.env.REACT_APP_WEATHER_API_KEY)
    },[])

    const fetchWeatherData = async () => {
        const {data, status} = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API}&q=bengaluru`)
        if(status == 200){
            setWeather(data.current)
        }
    }

    const fetchNews = async () => {
        const {data, status} = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}`)
        if(status == 200){
            setNews(data.articles[0])
        }
    }

    const formatDate = (date) => {
        if(weather || news){
            const formattedDate =  new Date(date).toLocaleString('en-IN',{
                day:'numeric',
                month: 'long',
                year: 'numeric'
            })
            return formattedDate
        }
    }
    const formatTime = (date) => {
        if(weather || news){
            const formattedTime = new Date(date).toLocaleString('en-IN',{
                hour:'numeric',
                minute: 'numeric',
                hour12: true
            })
            return formattedTime
        }
    }

    useEffect(() => {
        // formatDate()
        console.log(weather)
        // console.log(new Date())
        // console.log(news)
        // if(weather){
        //     console.log(weather.condition.text, weather.gust_kph, weather.humidity, weather.pressure_mb, weather.temp_c, weather.wind_kph)
        // } 
    }, [weather,news])
    

  return (
    <div className={styles.page}>
        <div className={styles.left}>
            {user && (
                <User user={user} userAvtar={userAvtar} selectedGenre={selectedGenre} genres={genres} />
            )}
            {weather && (
                <Weather weather={weather} formatDate={formatDate} formatTime={formatTime}/>
            )}
        </div>
        <div className={styles.right}>
            {news &&(
                <News news={news} formatDate={formatDate} formatTime={formatTime}/>
            )}
        </div>
    </div>
  )
}

export default Homepage