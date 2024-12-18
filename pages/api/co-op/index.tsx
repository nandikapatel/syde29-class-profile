import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export const getCoop = async () => {
  const mongoClient = await clientPromise;
  const data = await mongoClient.db("data").collection("coop").find().toArray();
  return JSON.parse(JSON.stringify(data));
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await getCoop();
  res.status(200).json({ coop: data });
};
