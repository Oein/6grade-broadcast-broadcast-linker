import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function L() {
  let router = useRouter();
  let [st, sst] = useState("서버와 통신중..");
  let [lt, slt] = useState(false);

  useEffect(() => {
    if (!lt) {
      axios.get("/api/link/get").then((d) => {
        let dt = d.data;
        sst(`링크 '${dt}' 로 이동중!`);
        router.push(decodeURI(dt));
      });
      slt(true);
    }
  });

  return (
    <header
      style={{
        textAlign: "center",
      }}
    >
      <h1>잠시만 기다려 주세요</h1>
      <desc>흥도초등학교 유튜브 스트리밍 링크로 이동중 입니다!</desc>
      <p></p>
      <desc>{st}</desc>
    </header>
  );
}
