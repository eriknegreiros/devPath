import { createContext, useState } from "react";

export const DashboardProvider = createContext({} as iModalContext);

interface iChildren {
  children: React.ReactNode;
}

interface iModalContext {
  modal: boolean;
  setModal: any;
  modalContents: (e: any) => void;
}

const DashboardContext = ({ children }: iChildren) => {
  const [modal, setModal] = useState(false);

  function modalContents(e: any) {
    e.preventDefault();
    console.log("oi");
    setModal(true);
  }

  return (
    <DashboardProvider.Provider value={{ modal, setModal, modalContents }}>
      {children}
    </DashboardProvider.Provider>
  );
};
export default DashboardContext;
