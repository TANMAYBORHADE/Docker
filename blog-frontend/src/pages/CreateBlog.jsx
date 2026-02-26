import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const navigate = useNavigate();

  const navigateWithDelay = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 180);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 text-black">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Blog</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Blog title"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Author name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            rows="8"
            placeholder="Write your blog content..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <button
            type="button"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Publish Blog
          </button>
        </form>

        <div className="border-t-2 border-dotted border-gray-300 mt-8 pt-8">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Already in your device? Just upload.
            </h3>
            <p className="text-gray-600 mb-4">
              Select your file from device and upload it directly.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Upload
              </button>

              <label className="bg-white border border-gray-300 text-black px-5 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                Select from Device
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          type="button"
          onClick={() => navigateWithDelay("/")}
          className="bg-white border border-gray-300 text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}