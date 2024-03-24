import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    AUTH_TOKEN_LOCAL_NAME
} from '../investments/action/action-const';
import {
    setAuthToken,
    setUser
} from '../investments/action/user-action';
import store from '../investments/reducer/store-reducer';
import {
    ALL_PATH,
    EDITORIAL_HEADING,
    EDITORIAL_PATH,
    HOME_HEADING,
    HOME_PATH,
    PROPOSAL_HEADING,
    PROPOSAL_PATH
} from '../model/store-const';
import storeNoRedux from '../model/store-no-redux';
import Home from '../pages/Home';
import Proposal from '../pages/Proposal';
import '../static/styles/main-section.css';
import HomeLayout from './HomeLayout';

export default function App() {


    useEffect(() => {
        let token = localStorage.getItem(AUTH_TOKEN_LOCAL_NAME);
        if (token) {
            setAuthToken(token);
            store.dispatch(setUser(jwtDecode(token).user));

        }

        console.log("APP=", store.getState());
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route exact path={HOME_PATH} element={<Home heading={HOME_HEADING} />} />
                        <Route exact path={PROPOSAL_PATH} element={
                            <Proposal
                                heading={PROPOSAL_HEADING}
                                data={storeNoRedux.proposals}
                                isOrder={true} />}
                        />
                        <Route exact path={EDITORIAL_PATH} element={
                            <Proposal
                                heading={EDITORIAL_HEADING}
                                data={storeNoRedux.editorial}
                                isOrder={false} />}
                        />
                        <Route path={ALL_PATH} element={<Home heading={HOME_HEADING} />} />
                    </Route>                  
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}








