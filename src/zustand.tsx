import { create } from "zustand";

interface cartType {
  id: number;
  name: string;
  img: string;
  quantity: string;
  price: number;
}

export const ShowCart = create((set) => ({
  show: false,
  setShow: (val: boolean) => set(() => ({ show: val })),
}));

export const SlideMenu = create((set) => ({
  show: false,
  setShow: () => set((state: any) => ({ show: !state.show })),
}));

export const shoppingCart = create((set) => ({
  cart: [],
  addNewItemInCart: (obj: cartType) => set(() => ({ cart: obj })),
}));
