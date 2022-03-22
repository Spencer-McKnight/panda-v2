import React, { useReducer, useEffect } from 'react';

import Content from './content';
import Header from './header';
import Hero from './hero';
import heroImage from '../images/hero.jpg';

import 'bootstrap/dist/css/bootstrap.css';

import { TableState, Action } from '../types/types';
import fetchData from 'utils/fetchData';
import filterData from 'utils/filterData';

const reducer: (arg0: TableState, arg1: Action) => TableState = (state: TableState, action: Action) => {
  switch (action.type) {
    case action.type = "success":
      const newData = filterData(action.dataset);
      return { loading: false, data: newData }
    case action.type = "failure":
      return { loading: false, error: action.errorMsg }
    default:
      return state;
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { loading: true })

  useEffect(() => {
    fetchData().then((e: Action) => {
      dispatch(e);
    });
  }, [])

  return (
    <div className="container">
      <Header />
      <Hero imgSrc={heroImage} altText='Giant Panda 🐼' />
      {state.loading ? <h1>Loading...</h1> : <Content {...state} />}
    </div>
  )
};

export default App;
