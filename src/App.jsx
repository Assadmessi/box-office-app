import { BrowserRouter, Routes, Route } from 'react-router-dom';
// From tanStack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
import MainLayout from './components/MainLayout';
import { GlobalTheme } from './theme';
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>

            <Route path="/show/:showId" element={<Show />} />

            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </BrowserRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
