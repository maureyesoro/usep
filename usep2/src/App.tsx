import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/component";
import Home from "./views/home/component";
import Login from "./views/login/component";
import Error404 from "./views/error404/component";
import Univ from './views/univ/component';
import Sep from './views/sep/component';
import TramiteU from './views/univid/component';
import TramiteS from './views/sepid/component';



const App = () => {

  // const location = useLocation();
  // const navigate = useNavigate();
  // const tokenUser = useSelector(userTokenSelector)
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (tokenUser && tokenUser !== "" && location.pathname === "/login") {
  //     navigate("/", {replace: true});
  //     // dispatch(logoutRequested(tokenUser))
  //   }
  // }, [tokenUser, location, navigate]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tramiteUniv" element={<Univ />} />
          <Route path="/tramiteSep" element={<Sep />} />
          <Route path="/tramiteUniv/:id/" element={<TramiteU />}/>
          <Route path="/tramiteSep/:id/" element={<TramiteS />}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
