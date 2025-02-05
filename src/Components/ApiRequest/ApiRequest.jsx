import axios from "axios";
import { useEffect, useState } from "react";

export default function ApiRequest(){
    const [data, setData] = useState([]);
    const FIRST_API_URL = 'https://reqres.in/api/users';
    const SECOND_API_URL = 'https://reqres.in/api/users?page=2';
    const THIRD_API_URL = 'https://reqres.in/api/users/2';
    const FOURTH_API_URL = 'https://reqres.in/api/users?page=2';
        useEffect(() => {
            axios.get(SECOND_API_URL)
            .then(res => setData(res.data.data))
            .catch(err => console.log(err))
        }, []);  // GET data from api server using axios

        useEffect(() => {
            axios.post(FIRST_API_URL, {
                    "name": "Lala",
                    "job": "Software Engineer"
                }
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }, []);  // POSTs data to the server

        useEffect(() =>{
            axios.put(THIRD_API_URL, {
                "name": "Lala",
                "job": "Artist"
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }, []);  // PUTs or updates the data in the server 

        useEffect(() => {
            axios.delete(FOURTH_API_URL)
            .then(res => console.log(res))
            .catch(err => console.log(err)) 
        }, []);   // DELETES data from the server


    return(
        <div>
            {
                data.map((d, i) => {
                    return <p key={i}>{d.email}</p>
                })
            }
        </div>
    )
}