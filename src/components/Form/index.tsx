import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iUser, UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { HiUser, HiEye, HiOutlineMail } from "react-icons/hi";

import FormStyles from "./styles";

const Form = () => {
  const { registerUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("*Nome obrigatório"),
    email: yup.string().required("*Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("*Senha obrigatória")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "*Deve conter 8 caracteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      ),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "*Confirmação de senha deve ser igual a senha"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUser>({
    resolver: yupResolver(formSchema),
  });

  return (
    <FormStyles onSubmit={handleSubmit(registerUser)}>
      <label htmlFor="name">Nome</label>
      <div>
        <input
          id="name"
          placeholder="Ex: Maria"
          type="text"
          {...register("name")}
        />
        <HiUser />
      </div>
      <p className="error">{errors.name?.message}</p>

      <label htmlFor="email">Email</label>
      <div>
        <input
          id="email"
          placeholder="Ex: maria@gmail.com"
          type="email"
          {...register("email")}
        />
        <HiOutlineMail />
      </div>
      <p className="error">{errors.email?.message}</p>

      <label htmlFor="password">Senha</label>
      <div>
        <input
          id="password"
          placeholder="*******"
          type="password"
          autoComplete="on"
          {...register("password")}
        />
        <HiEye />
      </div>
      <p className="error">{errors.password?.message}</p>

      <label htmlFor="confirmPassword">Confirmar a senha</label>
      <div>
        <input
          id="confirm-password"
          placeholder="*******"
          type="password"
          autoComplete="on"
          {...register("confirmPassword")}
        />
        <HiEye />
      </div>
      <p className="error">{errors.confirmPassword?.message}</p>

      <label htmlFor="occupation">Ocupação</label>
      <select id="select-ocuppation" {...register("occupation")}>
        <option value="Estudante">Estudante</option>
        <option value="Desenvolvedor Front-end">Desenvolvedor Front-end</option>
        <option value="Desenvolvedor Back-end">Desenvolvedor Back-end</option>
        <option value="Desenvolvedor Full-stack">
          Desenvolvedor Full-stack
        </option>
        <option value="Design UI/UX">Design UI/UX</option>
        <option value="Entusiasta Tech">Entusiasta Tech</option>
        <option value="Outro">Outro</option>
      </select>

      <button type="submit">Enviar</button>
    </FormStyles>
  );
};

export default Form;
