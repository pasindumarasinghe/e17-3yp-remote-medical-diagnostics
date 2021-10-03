import "./App.css";
import Store from "./store/Store";
import Login from "./components/Login";
import { MemoryRouter, Switch } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom"; //TODO:Remove BrowsweRouter
import PrivateRoute from "./components/PrivateRoute";
import React from "react";
import Loading from "./components/Loading";
import AuthProvider from "./components/AuthContext";
import PatientAppointmentsChatRoom from "./components/patient/PatientChatRoom";
import HomeSelector from "./components/HomeSelector";
import Signup from "./components/Signup";
import Landing from "./components/landing_page/Landing";
import About from "./components/landing_page/About";
import Contact from "./components/landing_page/Contact";
import DoctorMeta from "./components/DoctorMetaComponent";

interface props {}
const App: React.FunctionComponent<props> = () => {
  return (
    <>
      <AuthProvider>
        <Provider store={Store}>
          <MemoryRouter initialEntries={["/loading"]} initialIndex={0}>
            <Switch>
              <Route
                path="/loading"
                render={(props) => <Loading {...props} />}
              />

              <Route path="/" exact component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />

              <PrivateRoute path="/home" Comp={HomeSelector} />

              <Route
                path="/appointments/chat-room"
                component={PatientAppointmentsChatRoom}
              />
            </Switch>
          </MemoryRouter>
        </Provider>
      </AuthProvider>
    </>
  );
};

export default App;
