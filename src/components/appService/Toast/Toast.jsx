import { toast } from 'react-toastify';

// Default configuration for toast notifications
const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// Function to show toast notifications
export const showToast = (message, type = 'success', customConfig = {}) => {
  const config = { ...toastConfig, ...customConfig }; // Merge default and custom configurations
  
  switch (type) {
    case 'success':
      toast.success(message, config);
      break;
    case 'error':
      toast.error(message, config);
      break;
    case 'info':
      toast.info(message, config);
      break;
    default:
      toast(message, config); // Default to basic toast
      break;
  }
};
