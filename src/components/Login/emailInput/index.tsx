import { HiOutlineMail } from "react-icons/hi";
import InputContainer from "./style";

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
      <input type="text" placeholder="Email" {...register(`email`)} />
      <button type="button">
        <HiOutlineMail  color="#5c6ca4" />
      </button>
    </InputContainer>
  );
};
export default EmailInput;
