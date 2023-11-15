import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterByStars, filterForWord, getAllPackages } from './store/packages';
import Header from "./components/header/index"

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const packages = useSelector((state)=>state.packages.packages);
  useEffect(()=>{
    dispatch(getAllPackages())
    // dispatch(filterForWord("7bitconf"))
    
  },[dispatch])
  




  return (
    <>
    <Header></Header>
 
    </>
  )
}

export default App
