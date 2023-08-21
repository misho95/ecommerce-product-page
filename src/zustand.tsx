import { create } from "zustand";

interface cartType {
  id: number;
  name: string;
  img: string;
  quantity: number;
  price: number;
}

interface CartState {
  cart: cartType[];
  addNewItemInCart: (item: cartType) => void;
  deleteItemFromCart: (itemId: number) => void;
}

interface showCartType {
  show: boolean;
  setShow: (val: boolean) => void;
}

interface sliderMenu {
  show: boolean;
  setShow: () => void;
}

export const ShowCart = create<showCartType>((set) => ({
  show: false,
  setShow: (val: boolean) => set(() => ({ show: val })),
}));

export const SlideMenu = create<sliderMenu>((set) => ({
  show: false,
  setShow: () => set((state: any) => ({ show: !state.show })),
}));

export const shoppingCart = create<CartState>((set) => ({
  cart: [],
  addNewItemInCart: (obj: cartType) =>
    set((state) => {
      const findData = state.cart.find((c) => {
        if (c.id === obj.id) {
          return c;
        }
      });

      if (findData) {
        const updateCart = state.cart.map((c) => {
          if (c.id === obj.id) {
            return {
              ...c,
              quantity: c.quantity + obj.quantity,
            };
          } else {
            return c;
          }
        });
        return {
          cart: updateCart,
        };
      } else {
        return {
          cart: [...state.cart, obj],
        };
      }
    }),
  deleteItemFromCart: (itemId: number) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    }));
  },
}));
