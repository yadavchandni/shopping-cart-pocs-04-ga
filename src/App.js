
// import Home from "./components/Home/home";
//Local Files
import Navbar from "./components/Navbar/nav";

//Router files 
import RouterDashboard from "./router/routerDashboard";


function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Router Dashboard  */}
      <RouterDashboard />
    </>
  );
}

export default App;
