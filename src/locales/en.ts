export default {
  common: {
    add: "Add",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    title: "Title",
    description: "Description",
    faq: "FAQ",
    contact: "Contact Us",
    tos: "Terms of Service",
    policy: "Privacy Policy",
  },
  login: {
    title: "Sign In",
    email: "Email",
    password: "Password",
    button: "Sign In",
    orsign: "Or sign in with",
    forgot: "Forgot password?",
    noaccount: "Don't have an account?",
    create: "Create one here",
    error: "The email / password combination is invalid",
  },
  register: {
    title: "Create Account",
    username: "Username",
    email: "Email",
    password: "Password",
    button: "Create Account",
    orsign: "Or sign up with",
    agree: "By signing up, you agree to the",
    account: "Already have an account?",
    signin: "Sign In",
  },
  menu: {
    dashboard: "Home",
    home: "Home",
    settings: "Settings",
    chat: "Chat",
    lunwen: "Paper",
    todo: "Todos",
    write: "Write",

  },

  dashboard: {
    about: "🎈About Ai00 Server",
    title1: "😋Easy to use",
    text1: "The Ai00 server supports various backends, including Vulkan/Dx12/openGL, which allows it to run on most personal computers with NVidia/AMD/Intel GPUs. Additionally, it supports INT8/NF4 quantization, which can result in smaller in-memory size and faster inference speed. The NF4-quantized 7B model only requires 5.5GB of VRAM, making it a highly efficient solution for running AI models on low-end hardware.",
    title2: "🎁Free and open source",
    text2: "Ai00 server uses MIT/Apache2.0 license, free and open source for commercial use. You can integrate Ai00 server into your system or software. The community is actively developing!",
    title3: "✨Outstanding ability",
    text3: "Compatible with the API interface of chatGPT, using the powerful RWKV model. RWKV will hang all Transformer-based models, and the king model deployed on the end-side LLM. And it is iterating quickly, and the functions and performance are getting stronger and stronger.",
  },
  settings:{
    title1: "Settings",
    subtitle1: "Choose Model",
    subtitle2: "Choose Backend",
    button1: "Save",
    button2: "Run Model",
  },
  chat: {
    newchat: "New Chat",
    settings: "Settings",
    chating: "Let's Chat!",
    hello: "Hello, I am your AI assistant. If you have any questions or instructions, please let me know!",
    tips: "Use User and Assistant, AI will gain the best intelligence",
    youname: "Your Name",
    ainame: "AI Name",
    text: "AI Introduction",
    close: "Close",
    ok: "OK",

  },
  write: {
    settings: "Settings",
    write: "Write",
    title: "Paper Title",
    step1: "Generate Outline",
    step2: "Generate Paper",
    contens: "Contents",
    prompt1: "According to the title, make a highly condensed and comprehensive outline of the paper. The title of the paper is:",
    prompt2: "the format for paper outline: I. Introduction. II Main text. III. Conclusion. The main text is further divided into several specific sections, segmented using Roman numerals.",
    prompt3: "Write detailed paragraphs based on the topic of the paper:",
    prompt4: "Paragraph title:",

 },

  // Vuetify components translations
  $vuetify: {
    badge: "Badge",
    close: "Close",
    dataIterator: {
      noResultsText: "No matching records found",
      loadingText: "Loading items...",
    },
    dataTable: {
      itemsPerPageText: "Rows per page:",
      ariaLabel: {
        sortDescending: "Sorted descending.",
        sortAscending: "Sorted ascending.",
        sortNone: "Not sorted.",
        activateNone: "Activate to remove sorting.",
        activateDescending: "Activate to sort descending.",
        activateAscending: "Activate to sort ascending.",
      },
      sortBy: "Sort by",
    },

    dataFooter: {
      itemsPerPageText: "Items per page:",
      itemsPerPageAll: "All",
      nextPage: "Next page",
      prevPage: "Previous page",
      firstPage: "First page",
      lastPage: "Last page",
      pageText: "{0}-{1} of {2}",
    },
    datePicker: {
      itemsSelected: "{0} selected",
      nextMonthAriaLabel: "Next month",
      nextYearAriaLabel: "Next year",
      prevMonthAriaLabel: "Previous month",
      prevYearAriaLabel: "Previous year",
    },
    noDataText: "No data available",
    carousel: {
      prev: "Previous visual",
      next: "Next visual",
      ariaLabel: {
        delimiter: "Carousel slide {0} of {1}",
      },
    },
    calendar: {
      moreEvents: "{0} more",
    },
    fileInput: {
      counter: "{0} files",
      counterSize: "{0} files ({1} in total)",
    },
    timePicker: {
      am: "AM",
      pm: "PM",
    },
    pagination: {
      ariaLabel: {
        wrapper: "Pagination Navigation",
        next: "Next page",
        previous: "Previous page",
        page: "Goto Page {0}",
        currentPage: "Current Page, Page {0}",
      },
    },
  },
};

