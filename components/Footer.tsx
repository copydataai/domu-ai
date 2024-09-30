import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold font-raleway">domu</h2>
          <a
            href="https://www.linkedin.com/company/domu-ai/"
            className="hover:text-gray-300"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Supported by</h3>
            <div className="flex space-x-4">
              <img
                className="h-8 w-8 text-white"
                src="/images/aws-logo.png"
                alt="AWS"
              />
              <img
                className="h-8 w-8 text-white"
                src="/images/YC-logo.png"
                alt="YCombinator"
              />
              <img
                className="h-8 w-8 text-white"
                src="/images/microsoft-logo.png"
                alt="Microsoft"
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Want to learn more?</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            Copyright © 2024 Domu Technology Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Terms of service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
