import { Await, defer, useLoaderData, useLocation } from "react-router-dom";
import type { Params } from "react-router-dom";
import getUser from "../services/getUser.service";
import { Suspense } from "react";
import IUser from "../interfaces/user.interface";
import Profile from "../components/profile";

const ProfilePage = () => {
  const { profile }  = useLoaderData() as { profile: IUser };
  

  return <>
  <Suspense fallback={<div>Loading...</div>}>
    <Await resolve={profile}>
      {(profile: IUser) => (
        <Profile profile={profile} />
      )}
    </Await>
  </Suspense>
  </>;
};


export default ProfilePage;
