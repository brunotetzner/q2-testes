import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function SigUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("linkaqui", data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="nome" {...register("none")} />
      <input placeholder="email" {...register("email")} />
      <input placeholder="senha" {...register("password")} type="password" />
      <input placeholder="diga algo sobre você" {...register("bio")} />
      <button type="submit">enviar</button>
    </form>
  );
}
