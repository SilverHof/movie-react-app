import './scss/styles.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import NotFound from './pages/NotFound/NotFound';


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};


export default App;