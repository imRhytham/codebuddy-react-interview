import { FormContextProvider } from "../context/FormContext";
import Index from "../components/forms/Index";

const Home = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-4 text-center text-2xl font-bold">Multi-Step Form</h1>
      <FormContextProvider>
        <Index />
      </FormContextProvider>
    </div>
  );
};

export default Home;
