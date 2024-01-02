import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import EditArticle from "./components/EditArticle";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/edit" Component={EditArticle} />
      </Routes>
    </>
  );
}

export default App;
