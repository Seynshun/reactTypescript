import "./App.css";
import Table from "./Components/MyTable/TablePage";
import { Router } from "@reach/router";

function App() {
  return (
    <Router>
      <Table path="/" />
    </Router>
  );
}

export default App;
