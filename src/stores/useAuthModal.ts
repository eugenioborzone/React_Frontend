import { create } from 'zustand'

export enum EAuthModal {
    login,
    register,
    forgot,
}

type TUserAuthModal = {
    showLogin: boolean,
    showRegister: boolean,
    showForgot: boolean,
    open: (type: EAuthModal, state: boolean) => void;
}

const useAuthModalStore = create<TUserAuthModal>((set) => ({
    showLogin: false,
    showRegister: false,
    showForgot: false,
    open: (type, isOpen) => {
        set((state) => ({
            ...state,
            showLogin:  type === EAuthModal.login && isOpen,
            showForgot:  type === EAuthModal.forgot && isOpen,
            showRegister:  type === EAuthModal.register && isOpen,
        }))
    },
}))

export default useAuthModalStore;
