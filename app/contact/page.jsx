import ProtectedClient from '../components/ProtectedClient';
import Contact from '../../src/components/Contact';

export default function ContactPage() {
  return (
    <ProtectedClient>
      <Contact />
    </ProtectedClient>
  );
}
