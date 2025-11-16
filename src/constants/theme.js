// Theme colors
export const THEME = {
  colors: {
    primary: {
      blue: "#3b82f6",
      purple: "#9333ea",
      cyan: "#06b6d4",
    },
    gradients: {
      hero: "from-blue-500 via-purple-600 to-cyan-500",
      card: "from-blue-500/5 to-purple-600/5",
      border: "from-blue-500/20 to-purple-600/20",
      text: "from-white via-neutral-100 to-neutral-300",
    },
  },
};

// Case study color schemes
export const CASE_STUDY_COLORS = {
  salonmind: {
    from: "from-purple-500",
    via: "via-pink-500",
    to: "to-red-500",
    accent: "text-purple-400",
    border: "border-purple-500/20",
  },
  cleanmycar: {
    from: "from-blue-500",
    via: "via-cyan-500",
    to: "to-teal-500",
    accent: "text-blue-400",
    border: "border-blue-500/20",
  },
  jioads: {
    from: "from-orange-500",
    via: "via-red-500",
    to: "to-pink-500",
    accent: "text-orange-400",
    border: "border-orange-500/20",
  },
};

// Status indicators
export const STATUS = {
  loading: "loading",
  success: "success",
  error: "error",
  idle: "idle",
};

// Error messages
export const ERROR_MESSAGES = {
  generic: "Something went wrong. Please try again.",
  network: "Network error. Please check your connection.",
  form: {
    required: "This field is required",
    email: "Please enter a valid email address",
    minLength: (min) => `Must be at least ${min} characters`,
    maxLength: (max) => `Must be less than ${max} characters`,
  },
};

// Success messages
export const SUCCESS_MESSAGES = {
  form: "Thank you! Your message has been sent successfully.",
  subscribe: "Successfully subscribed to newsletter.",
};
