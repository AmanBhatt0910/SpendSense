import React, { useState } from "react";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.text();
        const token = data.split(" ")[1];
        localStorage.setItem("token", token);
        alert("Login successful!");
        window.location.href = "/dashboard";
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Invalid login credentials.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary-light via-teal-100 to-teal-200 min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-300 to-primary-300 opacity-30 diagonal-lines animate-pattern"></div>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-10 relative z-10 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full max-w-md space-y-6 px-4 lg:px-6">
          <div className="flex justify-center items-center mb-4">
            <MdOutlineAccountBalanceWallet className="text-primary text-5xl animate-bounce" />
            <h2 className="ml-2 text-3xl font-bold text-primary animate-fade-in">SpendSense</h2>
          </div>
          <h3 className="text-center text-lg font-semibold text-neutral-700 mb-4 animate-fade-in delay-100">
            Log in to manage your finances
          </h3>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <label htmlFor="username" className="block text-sm text-neutral-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full mt-1 pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out hover:border-primary focus:outline-none"
                required
              />
              <FaEnvelope className="absolute top-9 left-3 text-neutral-500" />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm text-neutral-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full mt-1 pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out hover:border-primary focus:outline-none"
                required
              />
              <FaLock className="absolute top-9 left-3 text-neutral-500" />
              <a
                href="#"
                className="text-sm text-primary hover:underline mt-2 block text-right transition-all duration-300 ease-in-out"
              >
                Forgot Password?
              </a>
            </div>

            {errorMessage && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-teal hover:from-teal hover:to-primary-light text-white py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-[103%] hover:shadow-xl"
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 hidden lg:block">
          <img
            src="/images/Computerlogin.svg"
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
