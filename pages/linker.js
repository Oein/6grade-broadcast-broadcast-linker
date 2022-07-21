import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Load from "../components/loading";
import { Input, Button, Tooltip } from "@nextui-org/react";

export default function Linker() {
  const [ld, setL] = useState(false);
  const [ip, setI] = useState("");

  return (
    <div
      style={{
        top: "8vh",
        bottom: "8vh",
        width: "90vw",
        height: "92vh",
        left: "5vw",
        right: "5vw",
        position: "fixed",
      }}
    >
      <header
        style={{
          marginBottom: "30px",
        }}
      >
        <h1>Oein&apos;s Heungo Broadcast Linker</h1>
      </header>
      <ToastContainer position="bottom-left" autoClose={3000} />
      {ld ? <Load /> : null}
      <Input
        labelPlaceholder="Put Broadcast Link here"
        style={{
          width: "80vw",
          fontSize: "1.1rem",
        }}
        value={ip}
        onChange={(e) => {
          setI(e.target.value);
        }}
      />
      <p></p>

      <Tooltip
        content={"This will link hdyt.kro.kr to url above"}
        rounded
        color="primary"
        placement="bottom"
      >
        <Button
          style={{
            marginTop: "100px",
          }}
          color="success"
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
        </Button>
      </Tooltip>
    </div>
  );
}
