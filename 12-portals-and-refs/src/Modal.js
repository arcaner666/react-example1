import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  // useRef, state'ler için bir konteynır görevi görür.
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
};
