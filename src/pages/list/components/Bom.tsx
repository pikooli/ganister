import { CreateAt, Bold } from "src/components/text";

const Bom = ({ bom }: { bom: PartBom }) => {
  const { properties } = bom;
  return (
    <div className="part-card">
      <p>
        <Bold text="Id" />: {properties._id}
      </p>
      <p>
        <Bold text="Quantity" /> : {properties.quantity}
      </p>
      <p>
        <Bold text="Laster" /> : {`${properties._isLatest}`}
      </p>
      <CreateAt date={properties._createdOn} />
    </div>
  );
};

export default Bom;
