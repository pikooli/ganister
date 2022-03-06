import React from "react";
import Bom from "src/components/Bom";

type Props = { part?: Part; partBom?: PartBom[]; setSelectedPart: Function };

const Modal: React.FC<Props> = ({ part, partBom, setSelectedPart }) => {
  if (!partBom?.length) return <></>;
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
          <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h1 className="mb-3 font-bold capitalize	">
                {part?.properties.name} part childrens :{" "}
              </h1>
              {partBom.map((bom, i) => (
                <Bom bom={bom} key={i} />
              ))}
            </div>
          </div>
          <div className="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="bg-transparent mt-2 hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPart(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
