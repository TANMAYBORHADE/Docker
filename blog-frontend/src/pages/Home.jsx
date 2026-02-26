import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const navigateWithDelay = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 180);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-black flex flex-col items-center justify-center px-6">

      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-5xl font-bold mb-4">BlogSphere 🚀</h1>
        <p className="text-lg opacity-90">
          A simple blogging platform where users can create, upload,
          and read blogs. Built as a Docker-focused micro project to
          demonstrate containerization and frontend deployment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">

        {/* Create Card */}
        <button
          type="button"
          onClick={() => navigateWithDelay("/create")}
          className="text-left"
        >
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:scale-105 transition transform cursor-pointer">
            <h2 className="text-2xl font-semibold mb-3">✍️ Create Blog</h2>
            <p className="opacity-90">
              Write your own blog using rich text or upload content
              from your device.
            </p>
          </div>
        </button>

        {/* Read Card */}
        <button
          type="button"
          onClick={() => navigateWithDelay("/read")}
          className="text-left"
        >
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:scale-105 transition transform cursor-pointer">
            <h2 className="text-2xl font-semibold mb-3">📖 Read Blogs</h2>
            <p className="opacity-90">
              Explore blogs written by different authors along with
              ratings and reviews.
            </p>
          </div>
        </button>

      </div>
    </div>
  );
}