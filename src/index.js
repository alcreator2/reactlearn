import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import app from 'src/Components/app/app';
import reportWebVitals from './reportWebVitals';
import Navbars from './components/navbar/navbar';
import ProfileStats from './components/profilestats/profilestats';
import ProfileInfo from './components/profileinfo/profileinfo';
import ProfileCover from './components/profilecover/profilecover';
import NewTweet from './components/newtweet/newtweet';
import RightPanel from './components/rightpanel/rightpanel';
import TweetCard from './components/tweetcard/tweetcard';
import { Col, Container, Row } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbars />
    <ProfileCover />
    <ProfileStats />
    <Container>
      <Row>
        <Col xs lg="3">
          <ProfileInfo />
        </Col>
        <Col xs lg="6" className='middlesection'>
          <NewTweet />
          <TweetCard />
        </Col>
        <Col xs lg="3">
          <RightPanel />
        </Col>
      </Row>
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
