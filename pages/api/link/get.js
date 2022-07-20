import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function handler(req, res) {
  prisma.youtubeLINK
    .findFirst({
      where: {
        id: "HDEYTL",
      },
    })
    .then((dt) => {
      if (dt == undefined) res.end("/");
      else {
        res.end(encodeURI(dt.url.toString()));
      }
    });
}
