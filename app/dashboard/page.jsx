import ProtectedClient from '../components/ProtectedClient';
import Dashboard from '../../src/components/Dashboard';

export default function DashboardPage() {
  return (
    <ProtectedClient>
      <Dashboard />
    </ProtectedClient>
  );
}
