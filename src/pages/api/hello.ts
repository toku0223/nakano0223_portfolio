// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { testFunc } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const result = await testFunc();
  const data = result.results
  
  res.status(200).json({ data});
}

