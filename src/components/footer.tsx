import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <h1 className="text-xl font-bold">My Website</h1>
          <p className="text-gray-400">Welcome to my website</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Social</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer