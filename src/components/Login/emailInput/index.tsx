import { AiOutlineMail } from "react-icons/ai";
import InputContainer from "./style";
import React from "react";
import {
  FieldValues,
  UseFormRegister,
  // useForm, // don't need this import
} from "react-hook-form";

interface IProps {
  register: UseFormRegister<FieldValues> | any;
}

const EmailInput = ({ register }: IProps) => {
  return (
    <InputContainer>
      <input type="email" placeholder="Email" {...register(`email`)} />
      <button type="button">
        <AiOutlineMail />
      </button>
    </InputContainer>
  );
};
export default EmailInput;
