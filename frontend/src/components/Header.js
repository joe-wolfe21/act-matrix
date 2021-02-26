import { useState, useEffect } from "react";

const Header = () => {
  const [header, setHeader] = useState("");

  useEffect(() => {
    fetch("/api/header")
      .then((response) => response.json())
      .then((data) => setHeader(data.header));
  });

  return <h2 className="header">{header}</h2>;
};

export default Header;
