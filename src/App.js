import './App.css';
import { ThreadList } from './ThreadList';
import { ThreadPost } from './ThreadPost';
import { InThreadList } from './InThreadList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    return (
        <BrowserRouter>
            {/* <ThreadList></ThreadList> */}
            <Routes>
                <Route exact path="/" element={<ThreadList />} />
                
                <Route path="threads/new" element={<ThreadPost />} />
                <Route path="/threads/:thread_id" element={<InThreadList />} />
            </Routes>
        </BrowserRouter>
    
    )
    
}

export default App;
