export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const PER_PAGE = 3;

export const NEXT_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export const steps = [
  {
    id: 1,
    content: "Jesus Christ Yesterday Today Forever Church.",
    goTo: 2,
  },
  {
    id: 2,
    content: "What would you like to know?",
    options: [
      {
        content: "Discover the Church",
        value: 1,
        goTo: 11,
      },
      {
        content: "Donation",
        value: 2,
        goTo: 12,
      },
      {
        content: "Become a Member",
        value: 3,
        goTo: 13,
      },
      {
        content: "Get Involved",
        value: 4,
        goTo: 14,
      },
      {
        content: "Receive Prayer and Guidance",
        value: 5,
        goTo: 15,
      },
    ],
  },
  {
    id: 11,
    content:
      "1.Attend a Service  2.Check the Church Website  3.Contact the Church Office",
    goTo: 4,
  },
  {
    id: 12,
    content: "Online Giving, In-Person Giving, Mail-in Giving",
    goTo: 4,
  },
  {
    id: 13,
    content:
      "Attend a New Member Orientation, Meet with a Pastor or Leader  ,Fill out a Membership Application",
    goTo: 4,
  },
  {
    id: 14,
    content:"Contact the Ministry or Service Leader,  Check the Church's Website for Opportunities,  Attend a Ministry or Service Meeting" ,
    goTo: 4,
  },
  {
    id: 15,
    content: "Contact the Church Office,  Request Prayer on the Church Website,  Meet with a Pastor or Leader.",
    goTo: 4,
  },
  {
    id: 4,
    content: "Have a nice day...",
    goTo: 5,
  },
  {
    id: 5,
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
  messageDelay: 940,
  refreshComponent: "Refresh",
  closeComponent: "Close",
};
