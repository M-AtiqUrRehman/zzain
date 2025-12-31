import ProtectedClient from '../components/ProtectedClient';
import Items from '../../src/components/Items';

export default function ProductsPage() {
  return (
    <ProtectedClient>
      <Items />
    </ProtectedClient>
  );
}
