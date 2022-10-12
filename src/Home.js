import './App.css';
import React, { useState, useEffect, Component, useNavigate } from 'react'
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState({
    monsters: [],
    searchField: '',
  });
  
  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, searchField : e.target.value}));
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setData((prevState) => ({ ...prevState, monsters : users })));

  }, [setData]);

    const { monsters, searchField } = data;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    

    return (
        <>
        <div className="App">
          <h1>Monsters duplex</h1>
          <SearchBox placeholder = 'search monsters' handleChange = { (e) => handleChange(e) }/>
          <CardList monsters = {filteredMonsters}/>
          {/* <Link></Link> */}
        </div>
      </>
    )
}

export default Home;