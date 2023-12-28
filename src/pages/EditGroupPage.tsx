import { useMediaQuery } from 'react-responsive';
import EditGroupForm from '../components/editGroupForm';

const EditGroupPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="mx-auto">
      <EditGroupForm isMobile={isMobile} />
    </div>
  );
}

export default EditGroupPage