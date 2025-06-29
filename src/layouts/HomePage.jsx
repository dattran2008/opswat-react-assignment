import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Enterprise Platform</h1>
      <div className="flex flex-col gap-4">
        <Button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3"
          onClick={() => navigate("/widget")}
        >
          Widget Application
        </Button>

        {/* <button
          onClick={() => alert("Jira Application is not implemented yet.")}
          className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded shadow text-lg"
        >
          Jira Application
        </button> */}
      </div>
    </div>
  );
};

export default HomePage;
