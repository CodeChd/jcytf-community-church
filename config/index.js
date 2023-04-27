export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const PER_PAGE = 3   

export const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'

export const steps = [
    {
      id: 1,
      content: "Hi, Visitor!",
      goTo: 2,
    },
    {
      id: 2,
      content: "What is my favorite animal",
      options: [
        {
          content: "Cat 🐱",
          value: 1,
          goTo: "error",
        },
        {
          content: "Dog 🐶",
          value: 2,
          goTo: 3,
        },
        {
          content: "Bear 🐻",
          value: 3,
          goTo: "error",
        },
      ],
    },
    {
      id: "error",
      content: "You're wrong! Try again...",
      goTo: 2,
    },
    {
      id: 3,
      content: "Wow! You're good! I give up...",
      goTo: 4,
    },
    {
      id: 4,
      content: "Bye!",
      end: true,
    },
  ];

  export const theme = {
    primaryColor: "#fbf1e5",
    secondaryColor: "#fb923c",
    textPrimaryColor: "#333333",
    textSecondaryColor: "#FFFFFF",
    containerStyle: {
        width: 330,
        position: "fixed",
        bottom: 20,
        right: 20,
      },
  };


  export const options = {
    header: "JCYTF",
    endContent: "Thank you for your patience 👋",
    botAvatarSrc: "/images/JCYTF_FOOTER.png",
    messageDelay: 900,

  };