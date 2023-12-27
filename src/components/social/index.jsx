import { RiFacebookFill, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import "./social.css";

const Social = () => {
  return (
    <ul className="social__list flex">
      <li className="social__item">
        <a href="#" className="social__link flex">
          <RiFacebookFill />
        </a>
      </li>
      <li className="social__item">
        <a href="#" className="social__link flex">
          <RiInstagramLine />
        </a>
      </li>
      <li className="social__item">
        <a href="#" className="social__link flex">
          <RiTwitterLine />
        </a>
      </li>
    </ul>
  );
};

export default Social;
