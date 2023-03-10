const classNames = (...args) =>
  args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== "boolean")
    .join(" ");

export default classNames;
