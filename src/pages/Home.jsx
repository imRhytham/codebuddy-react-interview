import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Stepper from "../components/Stepper";

const Home = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-4 flex items-center text-4xl font-bold">
        <Icon icon="mdi:home" className="mr-2" />
        Home
      </h1>

      <h2 className="mb-3 text-2xl">Welcome to the home page!</h2>

      <p className="mb-7">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eos quis iure unde incidunt?
        Hic, quisquam. Voluptate placeat officiis corporis dolores ea unde maxime, sed nulla cumque
        amet quam aliquam quas incidunt debitis sit aut a soluta quisquam repellat dignissimos qui.
        Perspiciatis similique quaerat reiciendis nam aliquam?
      </p>

      <Link to="/posts" className="flex items-center text-blue-600 hover:underline">
        Posts
        <Icon icon="mdi:arrow-right" className="ml-2" />
      </Link>
      <TextField label="Hi" error="Wrong" />
      <Button>Hi</Button>
      <Stepper steps={["Step 1", "Step 2", "Step 3", "step 4"]} currentStep={2} />
    </div>
  );
};

export default Home;
