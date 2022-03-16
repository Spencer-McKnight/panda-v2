import React, { useReducer, useEffect } from 'react';

import Content from './content';
import Header from './header';
import Hero from './hero';

import 'bootstrap/dist/css/bootstrap.css';

type TableState = {
  loading: true,
} | {
  loading: false,
  data: DonationEntry[]
} | {
  loading: false,
  error: string
}

type Action =
  | { type: 'success', dataset: DonationEntry[] }
  | { type: 'failure', errorMsg: string }

const isDisplayed: (arg0: DonationEntry) => boolean = (value: DonationEntry) => {
  return value.isPublic === true;
}

const reducer: (arg0: TableState, arg1: Action) => TableState = (state: TableState, action: Action) => {
  switch (action.type) {
    case action.type = "success":
      const filterData: DonationEntry[] = action.dataset.filter(isDisplayed)
      return { loading: false, data: filterData }
    case action.type = "failure":
      return { loading: false, error: action.errorMsg }
    default:
      return state;
  }
}

const fetchData: () => Promise<Action> = () => {
  return fetch("https://inlight-panda-rescue-api.herokuapp.com/donations?apiKey=cr2eJJDmDK94NgbaPL8Z")
    .then(res => res.json())
    .then((result) => {
      if (result.hasOwnProperty("error")) {
        const failObj: Action = { type: "failure", errorMsg: result.error };
        return failObj
      } else {
        const doneObj: Action = { type: "success", dataset: result };
        return doneObj;
      }
    })
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { loading: true })

  useEffect(() => {
    fetchData().then((e: any) => {
      dispatch(e);
    });
  }, [])

  if (state.loading) {
    return (
      <div className="container">
        <Header />
        <Hero altText='Giant Panda 🐼' />
        <h1>Loading...</h1>
      </div>
    )
  } else {
    return (
      <div className="container">
        <Header />
        <Hero altText='Giant Panda 🐼' />
        <Content {...state} />
      </div>
    )
  }
};

export default App;
