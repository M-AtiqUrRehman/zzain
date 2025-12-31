import ProtectedClient from '../components/ProtectedClient';
import Collection from '../../src/components/Collection';

export default function CollectionPage() {
  return (
    <ProtectedClient>
      <Collection />
    </ProtectedClient>
  );
}
