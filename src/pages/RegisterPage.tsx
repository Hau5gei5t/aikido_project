import React, { useState } from "react";
import { Register } from "../services/register.service";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Register({ ...formData, firstName: "asd", lastName: "dsa" });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Зарегистрироваться</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-bold mb-2"
            >
              Электронная почта
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Введите свою электронную почту"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-800 font-bold mb-2"
            >
              Пароль
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Введите свой пароль"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="mb-4 w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Зарегистрироваться
            </button>
          </div>
          <Link to={"/login"} className=" text-gray-400 px-4 rounded-lg">
            Авторизоваться
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
