import "./ContentFrame.css";
import {
  faSignInAlt,
  faTasks,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContentFrame() {
  return (
    <div className="contentFrame" style={{ zIndex: 1 }}>
      <div className="homeTab tabs">
        <FontAwesomeIcon icon={faSignInAlt} />
      </div>
      <div className="dashTab tabs">
        <FontAwesomeIcon icon={faTasks} />
      </div>
      <div className="aboutTab tabs">
        <FontAwesomeIcon icon={faQuestionCircle} />
      </div>
    </div>
  );
}

export default ContentFrame;
