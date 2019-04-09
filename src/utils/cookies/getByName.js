export default (name) => {
  const regex = new RegExp(`${name}=([^;]+)`);
  const parts = regex.exec(document.cookie);
  const value = parts !== null
    ? unescape(parts[1])
    : false;

  return value;
};
