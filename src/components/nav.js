import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const { navShow, setNavShow } = props;
  const [navMenu, setNavMenu] = useState([
    {
      id: 1,
      list: [
        {
          id: 1,
          name: "홈",
          path: "/",
        },
        {
          id: 2,
          name: "자기소개",
          path: "/intro",
        },
      ],
    },
    {
      id: 2,
      list: [
        {
          id: 1,
          name: "다이어리",
          path: "diary/story",
        },
        {
          id: 2,
          name: "울지말고 일어나",
          path: "diary/overcome",
        },
      ],
    },
    {
      id: 3,
      list: [
        {
          id: 1,
          name: "HTML",
          path: "/board/html",
        },
        {
          id: 2,
          name: "CSS",
          path: "/board/css",
        },
        {
          id: 3,
          name: "javascript",
          path: "/board/js",
        },
      ],
    },
  ]);
  return (
    <nav
      className={`${navShow ? "" : "hiddenNav"}`}
    >
      {navMenu.map((item) => (
        <ul key={`ul_${item.id}`}>
          {item.list.map((list) => (
            <li key={`li_${list.id}}`}>
              <Link
                to={list.path}
                onClick={() => {
                  setNavShow(false);
                }}
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}

export default Nav;
