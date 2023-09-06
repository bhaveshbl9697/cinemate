import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
// …or create a new repository on the command line
// echo "# cinemate" >> README.md
// git init
// git add README.md
// git commit - m "first commit"
// git branch - M main
// git remote add origin https://github.com/bhaveshbl9697/cinemate.git
// git push - u origin main
// …or push an existing repository from the command line
// git remote add origin https://github.com/bhaveshbl9697/cinemate.git
// git branch - M main
// git push - u origin main