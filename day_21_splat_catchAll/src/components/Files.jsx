import React from "react";
import { useParams } from "react-router";

const Files = () => {
  let params = useParams();
  // params["*"] will contain the remaining URL after files/
  let filePath = params["*"];
  console.log(filePath);
  return (
    <div>
      {filePath ? (
        <p>
          your path is <span className="text-green-500">{filePath}</span>
        </p>
      ) : (
        <>u not in specific path</>
      )}
    </div>
  );
};

export default Files;
