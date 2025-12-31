import ProtectedClient from '../components/ProtectedClient';
import Services from '../../src/components/Services';

export default function ServicesPage() {
  return (
    <ProtectedClient>
      <Services />
    </ProtectedClient>
  );
}
