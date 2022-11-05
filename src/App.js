import { Route, Routes } from 'react-router-dom';
import './App.css';
import DocumentaryPhotography from './Pages/Tabs/DocumentaryPhotography';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import StreetPhotography from './Pages/Tabs/StreetPhotography';
import TravelPhotography from './Pages/Tabs/TravelPhotography';
import FineArtPhotography from './Pages/Tabs/FineArtPhotography';
import NaturePhotography from './Pages/Tabs/NaturePhotography';
import Contact from './Pages/Tabs/Contact';
import About from './Pages/Tabs/About';
import { useState } from 'react';
import SectionModal from './Pages/Utilities/SectionModal';

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
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="streetPhotography" element={<StreetPhotography photoInfo={photoInfo} />} />
        <Route path="documentaryPhotography" element={<DocumentaryPhotography />} />
        <Route path="travelPhotography" element={<TravelPhotography />} />
        <Route path="fineArtPhotography" element={<FineArtPhotography />} />
        <Route path="naturePhotography" element={<NaturePhotography />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <SectionModal show={show} setShow={setShow} id={id} />
    </div>
  );
}

export default App;
