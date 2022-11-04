import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import DivInput from "./style";

const PasswordInput = ({ register }) => {
  const [visibility, setVisibility] = useState(false);
  const toggleBtn = () => {
    setVisibility((prevState) => !prevState);
  };
  return (
    <DivInput>
      <input
        type={visibility ? "text" : "password"}
        placeholder="Senha"
        {...register(`password`)}
      />
      <button className="eye" type="button" onClick={toggleBtn}>
        {visibility ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </button>
    </DivInput>
  );
};
export default PasswordInput;
