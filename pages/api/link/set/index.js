import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function handler(req, res) {
  const { query } = req;
  const { url } = query;

  console.log(url);

  prisma.youtubeLINK
    .update({
      where: {
        id: "HDEYTL",
      },
      data: {
        url: encodeURI(url),
      },
    })
    .then(() => {
      res.status(200).end("S");
    })
    .catch(() => {
      res.status(302).end("F");
    });
}
