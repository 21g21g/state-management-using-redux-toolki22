import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "./pages/mainpage/MainPage";
import Favourite from "./pages/favouritepage/Favourite";
import Modal from "./pages/modals/Modal";
import { useSelector } from "react-redux";

function App() {
  const isLockedd = useSelector((state) => state.food.isClicked);
  return (
    <div className="App">
      {isLockedd && <Modal />}
      {!isLockedd && (
        <>
          <NavBar />
          <Favourite />
          <MainPage />
        </>
      )}
    </div>
  );
}

export default App;
