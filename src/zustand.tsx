import { create } from "zustand";

export const ShowCart = create((set) => ({
  show: false,
  setShow: (val: boolean) => set(() => ({ show: val })),
}));

export const SlideMenu = create((set) => ({
  show: false,
  setShow: () => set((state: any) => ({ show: !state.show })),
}));
