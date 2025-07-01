import { useState } from "react"

const GetAllBooks = () =>{
    const [err, setError] = useState(null);
    const [bookData, setBookData] = useState([]);
    const getBooks = async(books) =>{
        try{
            const response = await fetch('http://localhost:8080/api/getAllbooks', {
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            if(!response.ok){
                throw new Error("Failed to getting books data");
            }
            const data = await response.json();
            setBookData(data);
        }catch(error){
            return setError(error.message || 'Something went wrong');
        }
    }
    return {err, bookData, getBooks};
}
export default GetAllBooks;