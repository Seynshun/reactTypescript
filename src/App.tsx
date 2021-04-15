import "./App.css";
import { Router } from "@reach/router";
import TablePage from "./Components/MyTable/TablePage";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <TablePage path="/" />
    </Router>
  );
};

export default App;
