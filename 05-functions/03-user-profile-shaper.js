const shapeUserProfiles = (legacyUsers) => {
  return legacyUsers.map(({ user_id, user_name, user_email }) => ({
    id: user_id,
    name: user_name.toUpperCase(),
    email: user_email
  }));
}

// Example:
const legacyUsers = [
  { user_id: 1, user_name: "Alice", user_email: "john@example.com" },
  { user_id: 2, user_name: "Bob", user_email: "jane@example.com" }
];

console.log(shapeUserProfiles(legacyUsers));