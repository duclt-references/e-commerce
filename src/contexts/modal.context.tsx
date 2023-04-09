import React, { createContext, useState } from 'react';
import { IProduct } from '../types/product.type';

interface IModalContext {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProduct | null;
  setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
}

const initialModalContext: IModalContext = {
  visible: false,
  setVisible: () => null,
  product: null,
  setProduct: () => null,
};

export const ModalContext = createContext<IModalContext>(initialModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState<boolean>(initialModalContext.visible);
  const [product, setProduct] = useState<IProduct | null>(
    initialModalContext.product
  );

  return (
    <ModalContext.Provider
      value={{
        visible,
        setVisible,
        product,
        setProduct,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
