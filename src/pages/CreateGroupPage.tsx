import { useMediaQuery } from 'react-responsive'
import CreateGroupForm from '../components/createGroupForm'

const CreateGroupPage = () => {
    const isMobile = useMediaQuery({
      query: "(max-width: 768px)",
    })
  return (
    <div className="mx-auto">
      <CreateGroupForm isMobile={isMobile} />
    </div>
  );
}

export default CreateGroupPage