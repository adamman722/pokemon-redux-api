import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function TrainerDetails() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>{params.trainerId}</h1>
      <h3>we got to a new page</h3>
    </div>
  );
}

export default TrainerDetails;
