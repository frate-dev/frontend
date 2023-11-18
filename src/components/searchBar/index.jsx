import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    const [url, setUrl] = useState("");
    const [score, setScore] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSearch = e =>{
        e.preventDefault()
        if(url != ""){
            navigate(`/packages?kwarg=${url}`)
        }else{
            navigate("/packages")
        }
    }

    // useEffect(()=>{
    //     if(score != "" && name != ""){
    //         setUrl(`name=${name}&score=${score}`)
    //     }else if(score !=""){
    //         setUrl(`score=${score}`)

    //     }else if(name != ""){
    //         setUrl(`name=${name}`)
    //     }
    // },[url, score, name])
    const handleChange = e => {
        e.preventDefault()
        setUrl(e.target.value)
    }
    return (
    <form
    className="mt-12 w-1/3 flex h-10 rounded-lg bg-gray justify-between"
    onSubmit={handleSearch}
    >
        <input
        type="text"
        placeholder="Search Here..."
        value={url}
        onChange={handleChange}
        className="bg-gray rounded-lg pl-2 w-10/12"
        ></input>
        <button
        className="pr-2 w-1/6"
        ><SearchIcon/></button>
        
    </form>)
}