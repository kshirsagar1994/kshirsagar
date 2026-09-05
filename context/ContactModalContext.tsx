"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContactModalContextType {
  isOpen: boolean;
  selectedService: string;
  openContactModal: (service?: string) => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openContactModal = (service?: string) => {
    if (service) setSelectedService(service);
    setIsOpen(true);
  };

  const closeContactModal = () => {
    setIsOpen(false);
  };

  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        selectedService,
        openContactModal,
        closeContactModal,
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}
