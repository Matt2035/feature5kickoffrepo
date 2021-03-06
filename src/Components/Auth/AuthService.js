import Parse from "parse";

export const createUser = (newUser) => {
  const user = Parse.User();
  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("user", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`${error.message}`);
    });
};

export default createUser;
