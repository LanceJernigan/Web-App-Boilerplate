export default (key) => {
  const pairs = window.location.search
    .substr(1)
    .split('&')
    .map(
      pair => pair.split('='),
    );

  return pairs.reduce(
    (v, [pairKey, pairValue]) => (key === pairKey
      ? pairValue
      : v),
    false,
  );
};
