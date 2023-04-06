import React from 'react'
import './App.css'

import { Route,Routes } from 'react-router-dom';
import Day7 from './portalProjects/Day7/day7';
import List from './portalProjects/Day6/List';
import Entry from './portalProjects/Day6/Entry';
import Day8 from './portalProjects/Day8/day8';
import Home from './portalProjects/Day9/Home';
import Albums from './portalProjects/Day9/Albums';
import Singers from './portalProjects/Day9/Singers';

function createEntry(items) {
    return (
      <Entry
        key={items.id}
        imgUrl={items.imgUrl}
        name={items.name}
        price={items.price}
      />
    );
  }
  


export default function App1() {
  return (
    <> 
      <div>
      <Day7/>
      <Day8/>
      <h1 style={{ textAlign:"center"}}>
      Products
   </h1>
   <dl >{List.map(createEntry)}</dl>
   <Home/>
   <Albums/>
   <Singers/>
      </div>
    </>
  )
}