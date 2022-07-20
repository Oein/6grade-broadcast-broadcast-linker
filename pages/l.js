import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";

export default function L() {
  let router = useRouter();

  useEffect(() => {
    axios.get("/api/link/get").then((d) => {
      let dt = d.data;
      router.push(decodeURI(dt));
    });
  });

  return (
    <>
      <h1>Wait a moment</h1>
      <h2>I'm redirecting you to Heungo Elementry school's broadcast link.</h2>
    </>
  );
}
