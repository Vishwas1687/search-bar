import React,{useState} from 'react';
import './SearchBar.css';
import {FaSearch,FaTimes} from 'react-icons/fa';
const SearchBar=({data})=>{
   const [searchData,setSearchData]=useState("")
   const [resultData,setResultData]=useState([])

   const handleChange=(event)=>{
    const fieldvalue=event.target.value
    setSearchData(fieldvalue)
    const newData=data.filter((book)=>{
        return book.title.toLowerCase().includes(searchData.toLowerCase())
    })
    if(searchData==='')
    setResultData([])
    else
    setResultData(newData)
   }


   const handleClear=()=>{
         setSearchData('')
         setResultData([])
   }
   return (
    <div className='results'>
    <div className="search-inputs">
        <div className="search-bar">
            <input type="text" name="searchbar" value={searchData} placeholder="Enter the Book here..." onChange={(event)=>handleChange(event)}/>
            {
                searchData?<span className="search-icon clear-btn" onClick={handleClear}><FaTimes/></span>:<span className="search-icon"><FaSearch/></span>
            }
            
        </div> 
    </div>
     {
          searchData && <div className="search-results">
            {
                resultData.slice(0,15).map((book,index)=>{
                    return (
                         <div key={index} className="search-item">
                         <p><a href={book.link} target="_blank">{book.title}</a></p>
                         </div>
                    )
                })
            }
            
        </div>
     } 
    </div>
   )
}
export default SearchBar;