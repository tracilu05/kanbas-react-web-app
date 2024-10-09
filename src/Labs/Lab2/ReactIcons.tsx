
import { FaCalendar, FaEnvelopeOpenText, FaRegClock }
  from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
// import { FaBible } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";

export default function ReactIcons() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4">
      <h3>React Icons Sampler</h3>
      <div className="d-flex">
        <VscAccount className="fs-3 text" />
        <AiOutlineDashboard className="fs-3 text" />
        <FaIcons.FaBible className="fs-3 text" />
        <FaCalendar className="fs-3 text" />
        <FaEnvelopeOpenText className="fs-3 text" />
        <FaRegClock className="fs-3 text" />
      </div>
    </div>
  );
}
