import React , {useState, useEffect} from 'react';
import ListofUsers from "./ListOfUsers.js";
import Paginations from "./Pagination.js";
import './App.css';

function App() {

const[user, getUser] = useState("danijela");
const[data, getData] = useState([]);
const[searchResults, getResults]= useState(100);
const[currentPage,setCurrentPage]=useState(1);

//this is handling the submit of the form and passes the value of the input to getUser 
const handleSubmit = (e) => {
  e.preventDefault();
  getUser(e.target.elements.input.value);
}

useEffect(()=>{
  fetch(`https://api.github.com/search/users?q=${user}&per_page=10&page=${currentPage}`, {
    method: "GET",
    headers: {
      "Authorization": "6a68aec627e98cb1f6452ddcd223117acf492781"
    }})
  .then(response => response.json())
  .then(data => {
  //here we are using the list of all users with similar usernames from the API
  getData(data.items);
  //passing the total number of the search results
  getResults(data.total_count);
  });
  },[user, currentPage, searchResults])


  return (
    <div className="App" onSubmit={handleSubmit}>

      <form>
      <input type="text" name="input" placeholder="search user" required/>
      <button value="submit" type="submit" ><i className="fas fa-search"></i></button>
      </form>

     <h4 style={{color:"rgba(0,0,0,0.8)"}}>Total number of search results: {searchResults}</h4>
     <ListofUsers users={data} />
     <Paginations setCurrentPage={setCurrentPage} searchResults={searchResults} />
    </div>
  );
}

export default App;
