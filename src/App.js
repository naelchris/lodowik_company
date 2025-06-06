import './App.css';
import { Contact } from './contact/contact';
import { Header } from './headerFooter/header';
import { HeaderV2 } from './headerFooter/header_v2'
import { Footer } from './headerFooter/footer';
import { RestrictedPage } from './restrictedPage/restricted';
import { PricingPlan } from './pricingPlan/pricingPlan';
import { Faq } from './faq/faq';
import { ProjectDetails } from './projectDetails/projectDetails';
import  {BangunRumah} from './bangunRumah/projectDetails'
import { Team } from './team/team';
import { TeamSingle } from './teamSingle/teamSingle';
import { About } from './about/about';
import { NotFound } from './404/404';
import { BlogDetails } from './blogDetails/blogDetails';
import { Services } from './servicesPage/services';
import { ServiceSingle } from './serviceSingle/serviceSingle';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { Project } from './project/project';
import { Terms } from './Allterms/terms';
import { Cookies } from './Allterms/cookies';
import { Privacy } from './Allterms/privacy';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SmoothScroll } from './smooth';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'; // Import the WhatsApp button

function App() {

  return (
    <BrowserRouter>
    <SmoothScroll />
      <HeaderV2 />
      <Routes>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/restricted-page' element={<RestrictedPage/>}></Route>
        <Route path='/pricing' element={<PricingPlan/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/project-details' element={<ProjectDetails/>}></Route>
        <Route path='/bangun-rumah' element={<BangunRumah/>}></Route>
        <Route path='/jasa-arsitek' element={<BangunRumah/>}></Route>
        <Route path='/jasa-interior' element={<BangunRumah/>}></Route>
        <Route path='/jasa-aluminium' element={<BangunRumah/>}></Route>
        <Route path='/jasa-kanopi' element={<BangunRumah/>}></Route>
        <Route path='/jasa-renovasi' element={<BangunRumah/>}></Route>
        {/* <Route path='/team' element={<Team/>}></Route> */}
        <Route path='/team-single' element={<TeamSingle/>}></Route>
        <Route path='/aboutus' element={<About/>}></Route>
        <Route path='/error' element={<NotFound/>}></Route>
        <Route path='/blog-details' element={<BlogDetails/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/service-single' element={<ServiceSingle/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/terms' element={<Terms />}></Route>
        <Route path='/cookies-policy' element={<Cookies />}></Route>
        <Route path='/privacy-policy' element={<Privacy />}></Route>
      </Routes>
      <Footer />
      <WhatsAppButton /> {/* Add the WhatsApp button here */}
    </BrowserRouter>
  );
}

export default App;
