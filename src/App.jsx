import Board from './components/Board';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold text-gray-900">Project Management Board</h1>
        </div>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
