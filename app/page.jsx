import ProtectedClient from './components/ProtectedClient';
import Dashboard from '../src/components/Dashboard';

export default function Home() {
  return (
    <ProtectedClient>
      <Dashboard />
    </ProtectedClient>
  );
}
