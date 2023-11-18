import { useEffect, useState } from "react";
import getData from "../services/getData.service";

const MainPage = () => {
  const [data, setData] = useState({
    loading: true,
    result: "not authorized",
  });
  if (localStorage.getItem("user") === null) {
    window.location.href = "/login";
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3000/600/users/${
          JSON.parse(localStorage.getItem("user")!).id
        }`;
        const response = await getData(url);
        console.log(response);

        setData({
          loading: false,
          result: response,
        });
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          window.location.href = "/login";
        }
        console.log(error);
      }
    };

    fetchData();
  }, [setData]);
  const res = data.result;

  return (
    <div className="flex gap-3 justify-center h-screen">
      <h1 className="text-4xl font-bold">Имя: {res.firstName}</h1>
      <h1 className="text-4xl font-bold">Фамилия: {res.lastName}</h1>
      {/* {JSON.stringify(data.result)} */}
    </div>
  );
};

export default MainPage;
