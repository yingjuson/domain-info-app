import HomePage from "./pages/home-page";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <div className="bg-gradient-to-bl from-cyan-400 to-blue-500 ">
      <main>
        {/* we can add routing setup here if necessary */}
        <HomePage />
      </main>
      <Toaster />
    </div>
  );
};

export default App;
