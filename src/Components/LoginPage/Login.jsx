import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100" id="login">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">
          Welcome Back to WasteWise!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to your account to continue managing your waste and rewards.
        </p>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-green-700 hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>
          {/* Optionally add Forgot Password link */}
          <p className="text-sm text-gray-600 mt-2">
            <Link
              to="/forgot-password"
              className="text-green-700 hover:underline font-medium"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
