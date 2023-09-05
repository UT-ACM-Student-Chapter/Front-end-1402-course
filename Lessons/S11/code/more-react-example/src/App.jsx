import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserPage from "./pages/User/User";
import Home from "./pages/Home/Home";
import UsersPage from "./pages/Users/Users";
import CustomHookPage from "./pages/CustomHook/CustomHook";
import Library from "./pages/Library/Library";
import AxiosPage from "./pages/Axios/Axios";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route exact path="users" element={<UsersPage />} />
          <Route path="users/:id/:info" element={<UserPage />} />
          <Route path="axios" element={<AxiosPage />} />
          {
            // todo
            // add dynamic route for UserPage
          }
          <Route path="hook" element={<CustomHookPage></CustomHookPage>} />
          <Route path="library" element={<Library></Library>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
