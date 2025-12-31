import ProtectedClient from '../components/ProtectedClient';
import AddProduct from '../../src/components/AddProduct';

export default function AddProductPage() {
  return (
    <ProtectedClient>
      <AddProduct />
    </ProtectedClient>
  );
}
