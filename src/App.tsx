import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardView } from './features/dashboard/DashboardView';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
