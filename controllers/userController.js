export const getUsers = (req, res) => {
  res.send("Hello user!");
};

export const createUser = (req, res) => {
  res.json({ msg: "User created!" });
};
