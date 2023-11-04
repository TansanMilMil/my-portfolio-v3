import Styles from './styles/index/index.module.scss';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import TopBar from './components/nav/top-bar';
import SideBar from './components/nav/side-bar';
import Tabs from './components/nav/tabs';
import RowNumber from './components/nav/row-number';
import BottomBar from './components/nav/bottom-bar';
import Home from './pages/home';
import Activities from './pages/activities';
import PastWork from './pages/past-work';
import Profile from './pages/profile';
import SkillSet from './pages/skill-set';

function App() {
  return (
    <div>
      <div className={Styles.topbar}>
        <TopBar></TopBar>
      </div>

      <div className={Styles.sidebar}>
        <SideBar></SideBar>
      </div>

      <div className={Styles.main}>
        <div className="position-relative">
          <div className={Styles.tabs}>
            <Tabs></Tabs>
          </div>
        </div>

        <div id="main-component" className={Styles.scrollable}>
          <RowNumber></RowNumber>
          <div id="inner-component">
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/activities" element={<Activities></Activities>} />
              <Route path="/contact" element={<Contact></Contact>} />
              <Route path="/past-work" element={<PastWork></PastWork>} />
              <Route path="/profile" element={<Profile></Profile>} />
              <Route path="/skill-set" element={<SkillSet></SkillSet>} />
            </Routes>
          </div>
        </div>
      </div>

      <div className={Styles.bottomBar}>
        <BottomBar></BottomBar>
      </div>
    </div>
  );
}

export default App;
