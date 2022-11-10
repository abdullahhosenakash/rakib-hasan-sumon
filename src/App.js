import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import TravelPhotography from './Pages/Tabs/TravelPhotography';
import FineArtPhotography from './Pages/Tabs/FineArtPhotography';
import NaturePhotography from './Pages/Tabs/NaturePhotography';
import Contact from './Pages/Tabs/Contact';
import About from './Pages/Tabs/About';
import { useState } from 'react';
import SectionModal from './Pages/Utilities/SectionModal';
import StreetPhotography from './Pages/Tabs/StreetPhotography/StreetPhotography';
import DocumentaryPhotography from './Pages/Tabs/DocumentaryPhotography/DocumentaryPhotography';

function App() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');

  const photoInfo = (id) => {
    setId(id);
    setShow(true);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home photoInfo={photoInfo} />} />
        <Route path="/home" element={<Home photoInfo={photoInfo} />} />
        <Route path="streetPhotography" element={<StreetPhotography photoInfo={photoInfo} />} />
        <Route path="documentaryPhotography" element={<DocumentaryPhotography photoInfo={photoInfo} />} />
        <Route path="travelPhotography" element={<TravelPhotography />} />
        <Route path="fineArtPhotography" element={<FineArtPhotography />} />
        <Route path="naturePhotography" element={<NaturePhotography />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {id && <SectionModal show={show} setShow={setShow} id={id} />}
    </div>
  );
}

export default App;
