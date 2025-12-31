import ProtectedClient from '../components/ProtectedClient';
import Blog from '../../src/components/Blog';

export default function BlogPage() {
  return (
    <ProtectedClient>
      <Blog />
    </ProtectedClient>
  );
}
