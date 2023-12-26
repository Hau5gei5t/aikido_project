import React from "react";
import { useMediaQuery } from "react-responsive";
import CreateEventForm from "../components/createEventForm";

const CreateEventPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="mx-auto">
      <CreateEventForm isMobile={isMobile} />
    </div>
  );
};

export default CreateEventPage;
