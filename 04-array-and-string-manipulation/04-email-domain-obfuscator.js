const email = '["user@gmail.com"]';

hideUserName(email);

function hideUserName(email) {
  const emailParts = email.split("@");
  const userName = emailParts[0].split("").map(() => "*").join("");
  const domain = emailParts[1];
  return userName + "@" + domain;
} 