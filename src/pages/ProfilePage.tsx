// @ts-nocheck
import { Await, defer, useLoaderData, useLocation } from "react-router-dom";
import { Suspense } from "react";
import IUser from "../interfaces/user.interface";
import Profile from "../components/profile";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const ProfilePage = () => {
  const { profile } = useLoaderData() as { profile: IUser };

  return (
    <>
      <Suspense
        fallback={
          <>
            <Flex align="center" justify="center" style={{ height: "100%" }}>
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />}
              ></Spin>
            </Flex>
          </>
        }
      >
        <Await resolve={profile}>
          {(profile: IUser) => <Profile profile={profile} />}
        </Await>
      </Suspense>
    </>
  );
};

export default ProfilePage;
