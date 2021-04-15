import "./App.css";
import Table from "./Components/MyTable/TablePage";
import { Router } from "@reach/router";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Table path="/" />
    </Router>
  );
};

export default App;
