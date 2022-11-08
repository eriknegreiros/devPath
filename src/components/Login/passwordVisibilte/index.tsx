import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import DivInput from "./style";
import React from "react";

import { FieldValues, UseFormRegister } from "react-hook-form";

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
      <input placeholder="senha" {...register(`password`)} />
      <button className="eye" type="button" onClick={toggleBtn}>
        {visibility ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </button>
    </DivInput>
  );
};
export default PasswordInput;
