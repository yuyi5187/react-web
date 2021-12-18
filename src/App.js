import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from "react-router-dom";

import Home from "./routes/Home"
import Detail from "./routes/Detail";

function App() {

  return (<Router>
    <Routes>
      <Route path="/react-for-beginners" element={<Home/>}/>
      <Route path="/movie/:id" element={<Detail/>}/>
    </Routes>
  </Router>
  );
}




export default App;
