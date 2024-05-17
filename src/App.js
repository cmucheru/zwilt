import NavBar from "./components/NavBar";
import Headline from "./components/Headline";
import HeadlineText from "./components/HeadlineText";
import SearchBar from "./components/SearchBar";
import JobCategory from "./components/JobCategory";
import Border from "./components/Border";
import Profile from "./components/Profile";
import Review from "./components/Review"; 
import ScreenProcess from "./components/ScreenProcess";
import StartYourJourney from "./components/StartYourJourney";

import ZwiltOpenBook from "./components/ZwiltOpenBook";
import FAQs from "./components/FAQs";
import CustomerForm from "./components/CustomerForm";
import Footer from "./components/Footer";
import "./App.css";
import ZwiltLoop from "./components/ZwiltLoop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Headline />
      <HeadlineText />
      <SearchBar />
      <JobCategory />
      <Border />
      <Profile />
      <Review/>
      <ScreenProcess /> 

      <StartYourJourney/>
      <ZwiltOpenBook/>
      <ZwiltLoop/>
    
      
      <FAQs/>
      <CustomerForm/>
      <Footer/> 
    </div>
  );
}

export default App;
