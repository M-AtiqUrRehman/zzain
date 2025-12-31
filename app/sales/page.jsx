import ProtectedClient from '../components/ProtectedClient';
import Sales from '../../src/components/Sales';

export default function SalesPage() {
  return (
    <ProtectedClient>
      <Sales />
    </ProtectedClient>
  );
}
