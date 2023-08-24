// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { testFunc } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const result = await testFunc();
  console.log('🚀 ~ file: hello.ts:14 ~ result:', result);
  res.status(200).json({ data: result });
}

