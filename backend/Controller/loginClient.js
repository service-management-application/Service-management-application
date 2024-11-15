const bcrypt = require('bcrypt');
const ClientModel = require('../model/Client'); // Rename model import for clarity

// Register Client
const registerClient = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if Client already exists
    const existingClient = await ClientModel.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: 'Client already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new Client
    const newClient = new ClientModel({ firstName, lastName, email, password: hashedPassword });
    await newClient.save();

    res.status(201).json({ message: 'Client registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering Client', error });
  }
};

// Login Client
const loginClient = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find Client by email
    const client = await ClientModel.findOne({ email });
    if (!client) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, client.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

module.exports = { registerClient, loginClient };
