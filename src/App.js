import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavBar />
      <main className='columns' >
        <div className='column is-align-content-center'>
          <div>
            <AboutMe />
            <Works />
            <ContactMe />
          </div>

        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
