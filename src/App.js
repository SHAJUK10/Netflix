
import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Row from './Components/Row';
import { requests } from './request';

function App() {
  return (
   
     <div>
     <Navbar/>
     <Banner fetchUrl={requests.fetchNetflixOriginals}/>
     
     <Row  title="Netflix Original"fetchUrl={requests.fetchNetflixOriginals}/>
     <Row  title="Trending"fetchUrl={requests.fetchTrending}/>
     <Row  title="Top Rated"fetchUrl={requests.fetchTopRated}/>
     <Row  title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
     <Row  title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
     <Row  title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
     <Row  title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/>
     <Row  title="Documentaries"fetchUrl={requests.fetchDocumentaries}/>
     </div>
   
  );
}

export default App;
