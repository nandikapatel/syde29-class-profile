import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export const getAcademics = async() => {
    const mongoClient = await clientPromise;
    const data = await mongoClient.db('data').collection('academics').find().toArray();
    return JSON.parse(JSON.stringify(data))
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await getAcademics();
    res.status(200).json({academics: data})
}