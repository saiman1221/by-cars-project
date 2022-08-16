import './App.css';
import Header from "./components/header/Header";
import HeaderNavigation from "./components/header_navigation/HeaderNavigation";
import MainPage from "./components/main_page/MainPage";
import CatalogPage from "./components/catalog_page/CatalogPage";
import Footer from "./components/footer/Footer";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <div className="App">
            <Header />
            <HeaderNavigation />
            <Routes>
                <Route path='/main' element={<MainPage />}/>
                <Route path='/catalog' element={<CatalogPage/>}/>
            </Routes>
            <Footer />
        </div>
        </BrowserRouter>


    );
}

export default App;