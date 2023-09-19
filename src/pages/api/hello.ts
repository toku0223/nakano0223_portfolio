// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { testFunc } from '@/utils/notion';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const result = await testFunc({});
 
  } catch (error) {
    console.log(error)
  }  
  res.status(200).json({test:""});
}

