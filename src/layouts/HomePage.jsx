import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Enterprise Platform</h1>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/widget")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow text-lg"
        >
          Widget Application
        </button>
        <button
          onClick={() => alert("Jira Application is not implemented yet.")}
          className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded shadow text-lg"
        >
          Jira Application
        </button>
      </div>
    </div>
  );
};

export default HomePage;
