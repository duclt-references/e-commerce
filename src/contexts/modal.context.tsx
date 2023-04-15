import React, { createContext, useState } from 'react';
import { IProduct } from '../types/product.type';

interface IModalContext {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProduct | null;
  setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
}

const initialModalContext: IModalContext = {
  quantity: 1,
  setQuantity: () => null,
  visible: false,
  setVisible: () => null,
  product: null,
  setProduct: () => null,
};

export const ModalContext = createContext<IModalContext>(initialModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [quantity, setQuantity] = useState<number>(
    initialModalContext.quantity
  );
  const [visible, setVisible] = useState<boolean>(initialModalContext.visible);
  const [product, setProduct] = useState<IProduct | null>(
    initialModalContext.product
  );

  return (
    <ModalContext.Provider
      value={{
        quantity,
        setQuantity,
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
