import React from "react";
import { CreateAt, Bold } from "src/components/text";

type Props = {
  part: Part;
  handSelectPart: Function;
};

const Part: React.FC<Props> = ({ part, handSelectPart }) => {
  const { properties } = part;
  return (
    <div
      className="part-card  cursor-pointer	"
      onClick={() => {
        handSelectPart(part);
      }}
    >
      <p>
        <Bold text="Id" /> : {properties._id}
      </p>
      <p>
        <Bold text="Name" /> : {properties.name || "no name"}
      </p>
      <p>
        <Bold text="Type" /> : {properties.type}
      </p>
      <CreateAt date={properties._createdOn} />
    </div>
  );
};

export default Part;
