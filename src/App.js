import React from "react";
import './App.css';
import Header from "./components/header/Header";
import HeaderNavigation from "./components/header_navigation/HeaderNavigation";
import MainPage from "./components/pages/main_page/MainPage";
import CatalogPage from "./components/pages/catalog_page/CatalogPage";
import Footer from "./components/footer/Footer";
import ContactsPage from "./components/pages/contacts_page/ContactsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <HeaderNavigation />
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/main' element={<MainPage />}/>
                    <Route path='/contacts' element={<ContactsPage/>}/>
                    <Route path='/catalog/*' element={<CatalogPage/>}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;