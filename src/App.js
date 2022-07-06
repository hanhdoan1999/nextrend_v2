import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import TextBox from './components/TextBox';
import Gallery from './components/Gallery';
import TextWithImage from './components/TextWithImage';
import OurStoryPage from './components/OurStoryPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const images = [
    {
      image: {
        sourceUrl:
          'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
      },
    },
    {
      image: {
        sourceUrl:
          'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
      },
    },
    {
      image: {
        sourceUrl:
          'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
      },
    },
  ];
  const heading = 'We got your back';
  const bg = '#97a955';
  const text =
    'Catimus ex ninte,converis conficid modcaed se crum idet pervis consil tametum hillius idetravo.';
  const image = {
    sourceUrl:
      'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
  };
  return (
    <Routes>
      <Route path='/' element={<OurStoryPage />} />
      <Route path='/header' element={<Header />} />
    </Routes>
  );
}

export default App;
