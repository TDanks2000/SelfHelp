import {createContext, useEffect, useState} from 'react';

export const ModalContext = createContext({});

interface AffirmationProps {
  affirmation_type:
    | 'relationship'
    | 'self_help'
    | 'motivation'
    | 'health'
    | undefined;
  modalVisible: boolean;
  color?: RGB | RGBA | string;
}

export const ModalContextProvider = ({children}: any) => {
  const [afflimationModalProps, setAfflimationModalProps] =
    useState<AffirmationProps>({
      affirmation_type: undefined,
      modalVisible: false,
    });

  return (
    <ModalContext.Provider
      value={{
        afflimationModalProps,
        setAfflimationModalProps,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
