import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { full_name, email_id, phone_number, country_of_residence, message } = req.body;

    if (!full_name || !email_id || !phone_number || !country_of_residence) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }

    try {
      
      const newUser = await prisma.user.create({
        data: {
          full_name,
          email_id,
          phone_number,
          country_of_residence,
          message,
        },
      });
      console.log('New user created:', newUser); 
      return res.status(200).json(newUser);
    } catch (error) {
      console.error('Failed to create user:', error); 
      return res.status(500).json({ error: 'Failed to create user' });
    }

  } else if (req.method === 'GET') {
    try {
      const forms = await prisma.user.findMany(); 
      res.status(200).json(forms);
    } catch (error) {
      console.error('Error fetching form submissions:', error);
      res.status(500).json({ error: 'Failed to fetch form submissions' });
    }

  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
