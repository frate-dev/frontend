import * as React from "react";
import PageContainer from "../../components/pageContainer/index"
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { filterForWord, getAllPackages } from "../../store/packages";
import { useEffect } from "react";

export default function PackagesPage(){
    const parsed = queryString.parse(location.search);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPackages());
      }, [dispatch, parsed.kwarg]);
    
    const displayedItems = useSelector((state)=>state.packages.packages).filter((i)=>i.name.includes(parsed.kwarg));
    

    
//https://discord.com/channels/@me/1159656072483713075/1174101759665393705
    return (
        <div>
            {
                displayedItems.length ? (<div>yes</div>):
                (<div>
                    <img src="https://media1.giphy.com/media/7p3e2WCM0VEnm/giphy.gif?cid=ecf05e47li5v9zdago8wibx14hdy8jl7ixqeoa01hv1m5zx8&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="sad panda"/></div>)
            }
            
        </div>
    )

}