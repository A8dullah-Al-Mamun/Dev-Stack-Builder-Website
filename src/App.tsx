import Nav from './components/nav.tsx'
import Hero from './components/hero.tsx'
import Technologies from './components/technologies.tsx'
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer.tsx'



function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Technologies />
      <ToastContainer />
      <Footer />


    </>
  )
}

export default App