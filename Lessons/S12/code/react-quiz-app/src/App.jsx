import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Register from "./pages/Register/Register";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";
import PrivateRoute from "./components/Wrapper/PrivateRoute";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Routes>
        <Route
          path="/quiz/:category"
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/result/:category"
          element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route index element={<Home />}></Route>
        <Route path={"*"} element={<Home />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
