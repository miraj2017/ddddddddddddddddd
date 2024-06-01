import { FaQuestion } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const adminSidebarMenus = [
  {
    key: 0,
    text: "Questions",
    href: "/questions",
    icon: <FaQuestion />,
    hasSubmenu: true,
    submenus: [
      {
        key: 0,
        text: "All Questions",
        href: "/all-questions",
        icon: <IoMdAdd />,
      },
      {
        key: 1,
        text: "Add Question",
        href: "/add-question",
        icon: <IoMdAdd />,
      },
      {
        key: 2,
        text: "Bulk Upload",
        href: "/questions/bulk-upload",
        icon: <IoMdAdd />,
      },
    ],
  },
  {
    key: 8,
    text: "Exams",
    href: "/live-exams",
    icon: <FaQuestion />,
    hasSubmenu: true,
    submenus: [
      {
        key: 0,
        text: "Exams",
        href: "/exams",
        icon: <IoMdAdd />,
      },
      {
        key: 1,
        text: "Add",
        href: "/exams/add",
        icon: <IoMdAdd />,
      },
    ],
  },

  {
    key: 1,
    text: "Blogs",
    href: "/blogs",
    icon: <IoMdAdd />,
  },
  {
    key: 1,
    text: "Add",
    href: "/blogs/add",
    icon: <IoMdAdd />,
  },
  {
    key: 1,
    text: "Add exams",
    href: "/add-exam",
    icon: <IoMdAdd />,
  },
  {
    key: 1,
    text: "All Exams",
    href: "/all-exam",
    icon: <IoMdAdd />,
  },
];

export default adminSidebarMenus;
