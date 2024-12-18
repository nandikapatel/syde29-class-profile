import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export const getDemographics = async() => {
    const mongoClient = await clientPromise;
    const data = await mongoClient.db('data').collection('demographics').find().toArray();
    return JSON.parse(JSON.stringify(data))
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await getDemographics();
    res.status(200).json({demographics: data})
}