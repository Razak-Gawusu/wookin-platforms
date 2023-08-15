import { toast } from "react-toastify";

function useToastify() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  function successToast(msg, options = {}) {
    toast.success(msg, { ...toastOptions, ...options });
  }

  function errorToast(msg, options = {}) {
    toast.error(msg, { ...toastOptions, ...options });
  }

  return { successToast, errorToast };
}

export { useToastify };
