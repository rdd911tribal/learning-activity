import React, {lazy, Suspense} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const LoadingComponent = () => <nav>Loading ...</nav>;

const TeamsPage = lazy(() => import('./components/TeamsPage'));
const TeamPage = lazy(() => import('./components/TeamPage'));

function App() {
  return (
      <div>

        <BrowserRouter>
        <>
            <Suspense fallback={<LoadingComponent />}>
                <Switch>
                    <Route exact path="/teams" component={TeamsPage} />
                    <Route exact path="/team/{id}" component={TeamPage} />
                    <Route exact path="/" component={TeamsPage} />
                </Switch>
            </Suspense>
        </>
        </BrowserRouter>

         
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
