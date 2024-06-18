import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import DashBoard from './components/DashBoard';
import Products from './components/Products';
// import 'antd/dist/antd.css'; 
import './index.css'; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<DashBoard />} />
                    <Route path="/products" element={<Products />} />
                </Route>
                <Route path="login" element={<div>This is login page</div>} >
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
