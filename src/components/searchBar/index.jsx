import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar(){
    const [url, setUrl] = useState("");
    const [score, setScore] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSearch = e =>{
        e.preventDefault()
        if(url != ""){
            navigate(`/packages${url}`)
        }else{
            navigate("/packages")
        }
    }
    return (
    <form
    onSubmit={handleSearch}
    >
        <input></input>
        <button></button>
        
    </form>)
}