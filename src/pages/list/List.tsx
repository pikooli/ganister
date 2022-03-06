import React, { useEffect, useContext, useState, useCallback } from "react";

import AuthContext from "src/lib/AuthContext";
import RequireAuth from "src/lib/RequireAuth";
import * as request from "src/lib/request";
import Part from "src/pages/list/components/part";
import Modal from "src/pages/list/components/Modal";
import Alert from "src/components/Alert";
import { URL } from "src/utils/constant";

type Props = {};

const List: React.FC<Props> = () => {
  const auth = useContext(AuthContext);
  const [parts, setParts] = useState<Part[]>([]);
  const [selectedPart, setSelectedPart] = useState<Part>();
  const [loadPartBom, setLoadPartBom] = useState(false);
  const [partBom, setPartBom] = useState<PartBom[]>();
  const [error, setError] = useState("");

  const get = useCallback(
    async (url: string) => {
      if (auth && auth.user) {
        const user = auth.user;
        const token = user.token;
        const headers = { Authorization: token };
        return await request.get({ url, headers }).then((res) => {
          if (res.status === 200) {
            return res;
          }
          setError("Error request");
        });
      }
    },
    [auth]
  );

  const handSelectPart = (part: Part) => {
    if (!loadPartBom) setSelectedPart(part);
  };

  useEffect(() => {
    const url = `${URL}/nodes/part`;
    get(url)
      .then((response) => response?.json())
      .then((result) => result && setParts(result.data))
      .catch((error) => console.log("error", error));
  }, [get]);

  useEffect(() => {
    if (!selectedPart) {
      return setPartBom(undefined);
    }
    const url = `${URL}/nodes/part/${selectedPart.properties._id}/relationships/partBom`;
    setLoadPartBom(true);
    get(url)
      .then((response) => {
        setLoadPartBom(false);
        return response?.json();
      })
      .then((result) => {
        if (result && result.data.length) {
          setError("");
          return setPartBom(result.data);
        }
        setError("No bom find");
      })
      .catch((error) => console.log("error", error));
  }, [get, selectedPart]);

  return (
    <RequireAuth>
      <div>
        <h1 className="mb-3 font-bold">List of Parts : </h1>
        <Alert text={error} handClose={() => setError("")} className="my-2" />
        {parts.map((part, i) => (
          <Part part={part} key={i} handSelectPart={handSelectPart} />
        ))}
        <Modal
          part={selectedPart}
          partBom={partBom}
          setSelectedPart={setSelectedPart}
        />
      </div>
    </RequireAuth>
  );
};

export default List;
