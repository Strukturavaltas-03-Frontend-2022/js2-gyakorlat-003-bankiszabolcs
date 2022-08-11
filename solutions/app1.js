const user = {
  firstName: "John",
  lastName: "Doe",
};

const { lastName, firstName, job = "unknown" } = user;

export { firstName, lastName, job };
