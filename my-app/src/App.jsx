import Products from "./component/Products";
import Cartprovider from "./Context/Cartprovider";
import Header from "./component/Header";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <Cartprovider>
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        autoClose={500}
        hideProgressBar={true}
      />
      <Header />
      <Products />
    </Cartprovider>
  );
}

export default App;
