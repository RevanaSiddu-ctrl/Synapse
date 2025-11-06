// Fetch all users
export const getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Nivas" },
    { id: 2, name: "Alex" }
  ]);
};

// Fetch user by ID
export const getUserById = (req, res) => {
  const { id } = req.params;
  res.json({ id, name: `User ${id}` });
};
