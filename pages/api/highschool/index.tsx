import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export const getHighschool = async() => {
    const mongoClient = await clientPromise;
    const data = await mongoClient.db('data').collection('highschool').find().toArray();
    return JSON.parse(JSON.stringify(data))
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await getHighschool();
    res.status(200).json({highschool: data})
}