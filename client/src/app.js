import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './routes/Landing';
import TestLink from './routes/exam/TestLink';
import StartTest from './routes/exam/StartTest';
import Result from './routes/exam/Result';
import { AuthContextProvider } from './context/authContext';
import Header from './components/Header';
import ProtectedRoutes from './components/ProtectedRoutes';
import { SubmitImage } from './faceUtil/main/SubmitImage';

class App extends Component {

    render() {
        return (
            <div>
                <AuthContextProvider>
                <Header />
                    <Routes>
                        <Route exact path="/" element={ <Landing /> } />
                        <Route path="/testlink" element={ <ProtectedRoutes><TestLink /></ProtectedRoutes>  } />
                        <Route path="/submitimage" element={ <ProtectedRoutes><SubmitImage /></ProtectedRoutes>  } />
                        <Route path="/starttest/:testid" element={ <StartTest />  } />
                        <Route path="/result/:testid" element={ <Result /> } />
                    </Routes>
                </AuthContextProvider>
            </div>
        )
    }
}



export default App;
