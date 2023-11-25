
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
    const location = useLocation();
    console.log(location);
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage