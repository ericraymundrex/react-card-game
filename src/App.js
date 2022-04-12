import CardsList from "./Components/CardsList";
import store from './Redux/redux-file'
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <CardsList />
    </Provider>
  );
}

export default App;
