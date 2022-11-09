import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import DivInput from "./style";


import {FieldValues, UseFormRegister} from "react-hook-form";

interface IProps {
  register: UseFormRegister<FieldValues> | any;
}

const PasswordInput = ({ register }: IProps) => {
  const [visibility, setVisibility] = useState(false);
  const toggleBtn = () => {
    setVisibility((prevState) => !prevState);
  };
  return (
    <DivInput>
      <input
        type={visibility ? "text" : "password"}
        placeholder='Senha'
        {...register(`password`)}
      />
      <button className="eye" type="button" onClick={toggleBtn}>
        {visibility ? <AiOutlineEyeInvisible color="#5c6ca4" /> : <AiOutlineEye color="#5c6ca4" />}
      </button>
    </DivInput>
  );
};
export default PasswordInput;
