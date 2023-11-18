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
    

    
//need to force a rerender if there is a change in params

    return (
        <div className="w-10/12 h-full mx-auto">
            {
                displayedItems.length ? (<div>yes</div>):
                (<div className="mx-auto pt-24">
                    <h3 className="text-slate mx-auto w-fit pb-6 text-lg">No Packages Found...</h3>
                    <h3 className="text-slate mx-auto w-fit pb-6 text-lg">Sad Panda...</h3>
                    <img className="mx-auto rounded" src="https://media1.giphy.com/media/7p3e2WCM0VEnm/giphy.gif?cid=ecf05e47li5v9zdago8wibx14hdy8jl7ixqeoa01hv1m5zx8&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="sad panda"/></div>)
            }
            
        </div>
    )

}