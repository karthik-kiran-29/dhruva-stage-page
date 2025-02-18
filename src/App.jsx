import { useEffect } from 'react';
import './App.css';
import OffStageEvents from './pages/OffStageEvents';
import StageEvents from './pages/StageEvents';
import Aos from 'aos';
import 'aos/dist/aos.css';
import  DragCards  from './components/DragCards';


function App() {
  useEffect(()=>{
    Aos.init();
  })

  return (
    <>
    <StageEvents/>
    <OffStageEvents/>
    <DragCards/>
    </>
  )
}

export default App
