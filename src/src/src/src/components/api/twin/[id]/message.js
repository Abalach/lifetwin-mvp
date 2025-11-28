export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message, twinName } = req.body
    // Mock AI response
    const reply = `AI ${twinName} says: I received your message "${message}"`
    res.status(200).json({ reply })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
