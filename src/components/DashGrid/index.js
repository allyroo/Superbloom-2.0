import "./DashGrid.css";
import Quote from "../Quote";
import SMARTGoal from "../SMARTGoal";
import ToDo from "../ToDo";

// getQuote(api_url)
function DashGrid() {
  return (
    <div className="dashboard" style={{ zIndex: 2 }}>
      <div id="gridContainer" style={{ zIndex: 2 }}>
        <div id="quote" style={{ zIndex: 3 }}>
          <Quote />
        </div>
        {/* <div id="week" style={{ zIndex: 3 }}>
          <span className="day" style={{ zIndex: 3 }}>
            SU
          </span>
          <span className="day" style={{ zIndex: 3 }}>
            M
          </span>
          <span className="day" style={{ zIndex: 3 }}>
            T
          </span>
          <span className="day" style={{ zIndex: 3 }}>
            W
          </span>
          <span className="day" style={{ zIndex: 3 }}>
            TH
          </span>
          <span className="day" style={{ zIndex: 3 }}>
            F
          </span>
          <span className="day" style={{ zIndex: 3 }}>
            SA
          </span>
        </div> */}
        <div id="smart" style={{ zIndex: 3 }}>
          <SMARTGoal />
        </div>
        <div id="smartBar" style={{ zIndex: 3 }}>
          Smart Goal Progress Bar
        </div>
        <div id="toDo" style={{ zIndex: 3 }}>
          Smart Goal Action
          <br /> To-Do List
        </div>
        <div id="taskCounter" style={{ zIndex: 4 }}></div>
        <div id="taskList" style={{ zIndex: 4 }}>
          <ToDo />
        </div>

        <div id="progress" style={{ zIndex: 3 }}>
          Category History
        </div>
      </div>
    </div>
  );
}

export default DashGrid;
