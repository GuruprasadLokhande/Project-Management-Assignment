import Board from "./components/Board";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="h-screen flex flex-col bg-blue-50 text-gray-900 overflow-hidden">
      <Toaster position="top-right" />
      <header className="bg-white shadow-sm w-full text-center py-4">
        <h1 className="text-3xl font-bold tracking-wide text-blue-800">
          Project Management Board
        </h1>
      </header>

      <main className="flex-grow flex items-center justify-center  w-full">
        <div className="w-full bg-white">
          <Board />
        </div>
      </main>
    </div>
  );
}

export default App;
