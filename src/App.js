import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector(state => state.account.amount);
  return (
    <div>
      <h1>Hi</h1>{state}
    </div>
  );
};



export default App;