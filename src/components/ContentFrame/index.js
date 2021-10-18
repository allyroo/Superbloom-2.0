import "./ContentFrame.css";

function ContentFrame() {
  return (
    <div className="contentFrame" style={{ zIndex: 1 }}>
      <div className="profile"></div>
      <div className="navbar"></div>
      <div className="gridContainer" style={{ zIndex: 2 }}></div>
    </div>
    // {/* <DashGrid /> */}
  );
}

export default ContentFrame;
