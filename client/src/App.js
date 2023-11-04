import Footer from './static/Footer';
import Template from './static/Template';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProxyRegister from './components/proxy/ProxyRegister';
import ProxyList from './components/proxy/ProxyList';
import Map from './components/map/map';
import Main from './components/main/main';
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
import Mypage from './components/mypage/Mypage';
import ChatList from './components/mypage/ChatList';

function App({id, nickname, photo, userId}) {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route
            path="/proxyDetail/chat"
            element={
              <Template>
                <Chat id={id} nickname={nickname} photo={photo} userId={userId}/>
              </Template>
            }
          ></Route>
          <Route
            path="/map"
            element={
              <Template>
                <Map id={id} nickname={nickname} photo={photo} userId={userId}/>
              </Template>
            }
          ></Route>
          <Route
            path="/proxy/register"
            element={
              <Template>
                <ProxyRegister id={id} nickname={nickname} photo={photo} userId={userId}/>
              </Template>
            }
          ></Route>
          <Route
            path="/proxy/getter"
            element={
              <Template>
                <ProxyList cities={cities} id={id} nickname={nickname} photo={photo} userId={userId}/>
              </Template>
            }
          ></Route>
          <Route
            path="/proxy/detail/:proxyId"
            element={
              <Template>
                <ProxyDetail id={id} nickname={nickname} photo={photo} userId={userId}/>
              </Template>
            }
          ></Route>
          <Route
            path="/waitMate/"
            element={
              <Template>
                <WaitMateRegister id={id} nickname={nickname} photo={photo} userId={userId}/>
              </Template>
            }
          ></Route>
          <Route
            path="/waitMate/list"
            element={
              <Template>
                <WaitMateList cities={cities} id={id} nickname={nickname} photo={photo} userId={userId}/>
              </Template>
            }
          ></Route>
          <Route
            path="/waitMate/detail/:wmId"
            element={
              <Template>
                <WaitMateDetail id={id} nickname={nickname} photo={photo} userId={userId}/>
              </Template>
            }
          ></Route>
          <Route 
            path="/register/SigninForm" 
            element={<SigninForm id={id} nickname={nickname} photo={photo} userId={userId}/>}>
          </Route>
          <Route 
            path="/register/SignupForm" 
            element={<SignupForm id={id} nickname={nickname} photo={photo} userId={userId}/>}>
          </Route>
          <Route 
            path="/register/UserInfo" 
            element={<UserInfo id={id} nickname={nickname} photo={photo} userId={userId}/>}>
          </Route>
          <Route 
            path="/mypage/Mypage" 
            element={<Mypage id={id} nickname={nickname} photo={photo} userId={userId}/>}>
          </Route>
          <Route 
           path="/mypage/ChatList" 
           element={<ChatList id={id} nickname={nickname} photo={photo} userId={userId}/>}>
          </Route>

          {/* <Route path='/waitMate/delete' element={<Template><waitMateRegister /></Template>}></Route> */}
          {/* <Route path='/waitMate/patch' element={<Template><waitMateRegister /></Template>}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
