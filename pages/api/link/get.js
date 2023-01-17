import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function handler(req, res) {
  prisma.shortURL.findFirst({
      where: {
        short: "hdyt",
      },
    })
    .then((dt) => {
      if (!dt) res.end("/");
      else {
        res.end(encodeURI(dt.long.toString()));
      }
    });
}
