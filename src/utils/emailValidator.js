const isValidEmail = (email) => {
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [, tld] = email.split(".").slice(-2);
  const validTlds = ["com", "org", "net"];
  if (!emailPattern.test(email)) {
    return false;
  }

  if (email.match(/(\.(com|net|org)){2,}$/i)) {
    return false;
  }

  if (email.match(/\.\./) || email.split("@")[0].match(/\.{2,}/)) {
    return false;
  }

  if (!validTlds.includes(tld.toLowerCase())) {
    return false;
  }

  return true;
};

export default isValidEmail;
