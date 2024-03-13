import {
  React,
  Component
} from 'react';
import Home from '../pages/Home';
import Proposal from '../pages/Proposal';
import '../static/styles/main-section.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  HOME_HEADING,
  PROPOSAL_HEADING,
  EDITORIAL_HEADING,
  HOME_PATH,
  PROPOSAL_PATH,
  EDITORIAL_PATH,
  ALL_PATH
} from '../model/store-const';
import store from '../model/store';


export default class MainSection extends Component {

  render() {

    return (

      <section className='main-section'>

        <BrowserRouter>
          <Routes>
            <Route exact path={HOME_PATH} element={<Home heading={HOME_HEADING} />} />
            <Route exact path={PROPOSAL_PATH} element={
              <Proposal
                heading={PROPOSAL_HEADING}
                data={store.proposals}
                isOrder={true} />}
            />
            <Route exact path={EDITORIAL_PATH} element={
              <Proposal
                heading={EDITORIAL_HEADING}
                data={store.editorial}
                isOrder={false} />}
            />
            <Route path={ALL_PATH} element={<Home heading={HOME_HEADING} />} />
          </Routes>
        </BrowserRouter>

      </section>

    );

  }

}