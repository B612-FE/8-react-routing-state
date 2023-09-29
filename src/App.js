import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot, atom } from "recoil";
import MainPage from "./pages/MainPage";
import FriendList from "./pages/FriendList";
import ChatList from "./pages/ChatList";

function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<MainPage/>} />
                        <Route path="/FriendList" element={<FriendList />} />
                        <Route path="/ChatList" element={<ChatList />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </RecoilRoot>
        
    )
}

export default App;