import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../api/Auth";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePages";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const checkAuthorized = async () => {
      const {ok} = await Auth.check(); // {ok, auth}
      setAuthorized(ok);
    }
    checkAuthorized();
  }, []);

  return (<>
    <Navbar authorized={authorized} setAuthorized={setAuthorized}/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage authorized={authorized} setAuthorized={setAuthorized} />} />
      <Route path='/register' element={<RegisterPage authorized={authorized} setAuthorized={setAuthorized} />} />
    </Routes>
  </>);
};

export default App;