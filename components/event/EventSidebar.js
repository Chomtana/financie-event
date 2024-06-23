import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function EventSidebar({ price = 'FREE', token = '', title = '', id = '' }) {
  return (
    <div className="side-bar">
      <div className="side-bar__box">
        <h6 className="title">Join Now</h6>

        <p className="fs-18 mt-3"><b>Price: {price} {token}</b></p>

        <Link href={`/join?title=${title}&id=${id}`} className="btn-action style-2 w-100 text-center" data-aos="fade-up" data-aos-duration={1200}>
          Join
        </Link>

        {token && (
          <Link href={`https://financie.jp`} target="_blank" className="btn-action style-2 w-100 text-center" data-aos="fade-up" data-aos-duration={1200}>
            Buy ${token}
          </Link>
        )}
      </div>
      <div className="side-bar__box">
        <h6 className="title">Going</h6>
        <ul className="recent">
          <li className="d-flex align-items-center gap-2">
            <i className="fa fa-user" /> Chomtana
          </li>
          <li className="d-flex align-items-center gap-2">
            <i className="fa fa-user" /> Alice1985
          </li>
          <li className="d-flex align-items-center gap-2">
            <i className="fa fa-user" /> SaraKyoto
          </li>
          <li className="d-flex align-items-center gap-2">
            <i className="fa fa-user" /> TokyoBoy
          </li>
        </ul>
      </div>
    </div>
  );
}
