import { toast } from "react-toastify";

export function verifyToast(verifier, text, position) {
  const notify = toast[verifier](`${text}`, {
    position: position,
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  return notify;
}
