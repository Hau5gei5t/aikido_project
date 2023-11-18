import { useState } from "react";
import { Login } from "../services/login.service";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Login(formData);
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-300 rounded-lg shadow-md p-8 bg-white"
      >
        <h2 className="text-3xl font-bold mb-4">Вход</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Электронная почта
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Введите свою электронную почту"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Пароль
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Введите свой пароль"
            onChange={handleChange}
            name="password"
          />
        </div>
        <button
          type="submit"
          className="mb-4 w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
        >
          Войти
        </button>
        <Link to={"/register"} className=" text-gray-400 px-4 rounded-lg">
          Зарегистрироваться
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
