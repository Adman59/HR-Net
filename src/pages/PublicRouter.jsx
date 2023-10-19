import { Routes, Route } from 'react-router-dom'
import { Home, List, Not404 } from '@/pages/index'
import Layout from '@/layout/Layout';

const PublicRouter = () => {
    
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="*" element={<Not404 />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;