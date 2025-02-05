import React from 'react'
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import styles from './ImageCard.module.css'

const YE_API_URL = 'https://api.kanye.rest';

export default function ImageCard(props) {
    const {quote,setQuote} = props;
    const [animationKey, setAnimationKey] = useState(1); 
    const renderAfterCalled = useRef(false);

    const fetchData = () => {
        if(!renderAfterCalled.current){
          axios.get(YE_API_URL)
          .then(res => setQuote(res.data.quote))
          .catch(err => console.log(err))
        }
        renderAfterCalled.current = true;
         setAnimationKey(prevKey => prevKey + 1);
         console.log(animationKey);
    }

    useEffect(() => {
        fetchData();
    }, []);

    renderAfterCalled.current = false;
    
  return (  
        <div className={styles.container}>
            <p key={animationKey} className={styles.text}>{quote}</p>
            <button className={styles.refreshBtn}  onClick={fetchData}>refresh</button>
        </div>
  )
}

