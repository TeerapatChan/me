import { Outlet } from '@tanstack/react-router';
import { Navbar } from './components/layout';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto px-6">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
