import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Load from "../components/loading";

export default function linker() {
  let [ld, setL] = useState(false);
  let [ip, setI] = useState("");
  return (
    <>
      <ToastContainer position="bottom-left" autoClose={3000} />
      {ld ? <Load /> : null}
      <input
        placeholder="Put Broadcast Link here"
        style={{
          width: "90vw",
          fontSize: "1.1rem",
        }}
        value={ip}
        onChange={(e) => {
          setI(e.target.value);
        }}
      />
      <p></p>

      <button
        onClick={() => {
          setL(true);
          axios
            .get(`/api/link/set`, {
              params: {
                url: encodeURI(ip),
              },
            })
            .then(() => {
              toast("Successfully linked!", {
                type: "success",
              });
            })
            .catch(() => {
              toast("Error occured", {
                type: "error",
              });
            })
            .finally(() => {
              setL(false);
            });
        }}
      >
        Link!
      </button>
    </>
  );
}
