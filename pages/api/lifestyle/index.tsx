import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export const getLifestyle = async () => {
  const mongoClient = await clientPromise;
  const data = await mongoClient.db("data").collection("lifestyle").find().toArray();
  return JSON.parse(JSON.stringify(data));
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await getLifestyle();
  res.status(200).json({ lifestyle: data });
};

