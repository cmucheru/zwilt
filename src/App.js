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
import ZwiltOnboard from "./components/ZwiltOnboard"; //will be moved to parent
import ZwiltOpenBook from "./components/ZwiltOpenBook"; //will be moved to parent
import ZwiltLoop from "./components/ZwiltLoop"; //child to a parent
import FAQs from "./components/FAQs";
import BorderRec from "./components/BorderRec";
import CustomerForm from "./components/CustomerForm";
import Footer from "./components/Footer";
import "./App.css";

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
     <StartYourJourney /> 
      {/* <ZwiltOnboard />
      <ZwiltOpenBook />
      <ZwiltLoop />
      <FAQs/>
      <BorderRec/>
      <Footer/> */}
    </div>
  );
}

export default App;
