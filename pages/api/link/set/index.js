import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function handler(req, res) {
  const { query } = req;
  const { url } = query;

  console.log(url);

  prisma.youtubeLINK
    .update({
      where: {
        short: "hdyt",
      },
      data: {
        long: encodeURI(url),
      },
    })
    .then(() => {
      res.status(200).end("S");
    })
    .catch(() => {
      res.status(302).end("F");
    });
}
