import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function EventSidebar({ price = 'FREE' }) {
  return (
    <div className="side-bar">
      <div className="side-bar__box">
        <h6 className="title">Join Now</h6>

        <p className="fs-18 mt-3"><b>Price: {price}</b></p>

        <a href="#" className="btn-action style-2 w-100 text-center" data-aos="fade-up" data-aos-duration={1200}>
          Join
        </a>
      </div>
      <div className="side-bar__box">
        <h6 className="title">Going</h6>
        <ul className="recent">
          <li className="d-flex align-items-center gap-2">
            <i className="fa fa-user" /> chomtana.apt
          </li>
          <li className="d-flex align-items-center gap-2">
            <i className="fa fa-user" /> aptos.chomtana.eth
          </li>
          <li className="d-flex align-items-center gap-2">
            <i className="fa fa-user" /> someone9612.apt
          </li>
          <li className="d-flex align-items-center gap-2">
            <i className="fa fa-user" /> someone1786.eth
          </li>
        </ul>
      </div>
    </div>
  );
}
