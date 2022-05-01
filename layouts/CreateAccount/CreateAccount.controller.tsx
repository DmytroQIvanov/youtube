import axios from "axios";

export const useCreateAccountController = () => {
  const onSubmit = (data) => {
    axios.post("http://localhost:8080/user/login", data).then((responce) => {
      if (responce) alert();
    });
  };
  return { onSubmit };
};
