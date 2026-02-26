import { useNavigate } from "react-router-dom";

export default function ReadBlog() {
  const navigate = useNavigate();

  const navigateWithDelay = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 180);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 text-black">

      <h2 className="text-4xl font-bold text-center mb-10">
        Explore Blogs
      </h2>

      <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">

        <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] transition transform duration-300 cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">
            Getting Started with Docker
          </h3>
          <p className="text-sm mb-3 text-gray-500">By Tanmay ⭐⭐⭐⭐☆</p>
          <p>
            Learn the basics of containerization and how Docker
            simplifies application deployment.
          </p>
        </div>

        <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] transition transform duration-300 cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">
            Why Frontend Matters
          </h3>
          <p className="text-sm mb-3 text-gray-500">By Niranjan ⭐⭐⭐⭐⭐</p>
          <p>
            A great UI improves user experience and engagement.
            Here's why design is important.
          </p>
        </div>

      </div>

      <div className="text-center mt-10">
        <button
          type="button"
          onClick={() => navigateWithDelay("/")}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Back to Home
        </button>
      </div>

    </div>
  );
}