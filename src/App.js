import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menu";
import Container from "./Components/Container";
import Home from "./Components/Home"
import Table from "./Components/Table";
import AddUserForm from "./Components/AddUserForm"
import AddTradeForm from "./Components/AddTradeForm"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="/viewtrades" element={<Table />} />
          <Route path="/adduser" element={<AddUserForm />} />
          <Route path="/addtrade" element={<AddTradeForm />} />
        </Routes>
      </BrowserRouter>
      {/* <Menu />
      <Container /> */}
    </div>
  );
}

export default App;
