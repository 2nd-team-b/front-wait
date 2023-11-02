import Footer from './static/Footer';
import Template from './static/Template';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProxyRegister from './components/proxy/ProxyRegister';
import ProxyList from './components/proxy/ProxyList';
import Main from './components/main/Main';
import ProxyDetail from './components/proxy/ProxyDetail';
import WaitMateRegister from './components/waitMate/WaitMateRegister';
import WaitMateList from './components/waitMate/WaitMateList';
import WaitMateDetail from './components/waitMate/WaitMateDetail';
import SigninForm from './components/register/SigninForm';
import SignupForm from './components/register/SignupForm';
import UserInfo from './components/register/UserInfo';
// import MyProxy from './components/mypage/MyProxy';
// import MyWaitmate from './components/mypage/MyWaitmate';
import Chat from './components/Chat/Chat';
import cities from './static/cities';
import Map from './components/map/Map';

function App() {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route
            path="/proxyDetail/chat"
            element={
              <Template>
                <Chat />
              </Template>
            }
          ></Route>
          <Route
            path="/map"
            element={
              <Template>
                <Map />
              </Template>
            }
          ></Route>
          <Route
            path="/proxy/register"
            element={
              <Template>
                <ProxyRegister />
              </Template>
            }
          ></Route>
          <Route
            path="/proxy/getter"
            element={
              <Template>
                <ProxyList cities={cities} />
              </Template>
            }
          ></Route>
          <Route
            path="/proxy/:proxyId"
            element={
              <Template>
                <ProxyDetail />
              </Template>
            }
          ></Route>
          <Route
            path="/waitMate/"
            element={
              <Template>
                <WaitMateRegister />
              </Template>
            }
          ></Route>
          <Route
            path="/waitMate/list"
            element={
              <Template>
                <WaitMateList cities={cities} />
              </Template>
            }
          ></Route>
          <Route
            path="/waitMate/detail/:wmId"
            element={
              <Template>
                <WaitMateDetail />
              </Template>
            }
          ></Route>
          <Route path="/register/SigninForm" element={<SigninForm />}></Route>
          <Route path="/register/SignupForm" element={<SignupForm />}></Route>
          <Route path="/register/UserInfo" element={<UserInfo />}></Route>

          {/* <Route path='/waitMate/delete' element={<Template><waitMateRegister /></Template>}></Route> */}
          {/* <Route path='/waitMate/patch' element={<Template><waitMateRegister /></Template>}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
