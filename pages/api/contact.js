import { connectDatabase, insertDocument } from '../../helpers/db-util';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid data input.' });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    let result;
    try {
      result = await insertDocument(client, 'messages', newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed.' });
      return;
    }

    res.status(201).json({
      message: 'Successfully stored message.',
      newMessage: result,
    });

    client.close();
  }
}
