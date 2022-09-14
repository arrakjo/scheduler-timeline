import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import "./App.css";
import moment from "moment";
import { TodayMarker } from "react-calendar-timeline";
import { TimelineHeaders } from "react-calendar-timeline";
import { SidebarHeader } from "react-calendar-timeline";
import { DateHeader } from "react-calendar-timeline";
import Header from "./Header";

const groups = [
  { id: 1, title: "Jaanus Juhan" },
  { id: 2, title: "Joosep Arrak" },
  { id: 3, title: "Peeter Eeter" },
  { id: 4, title: "Jaanus Juhan" },
  { id: 5, title: "Joosep Arrak" },
  { id: 6, title: "Peeter Eeter" },
  { id: 7, title: "Joosep Arrak" },
];

const items = [
  {
    id: 1,
    group: 1,
    title: "item 1",
    start_time: moment(),
    end_time: moment().add(1, "hour"),
    rightTitle: "title in the right sidebar",
    stackItems: true,
    height: 141,
  },
  {
    id: 2,
    group: 2,
    title: "item 2",
    start_time: moment().add(-0.5, "hour"),
    end_time: moment().add(0.5, "hour"),
  },
  {
    id: 3,
    group: 1,
    title: "item 3",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
];

function App() {
  return (
    <>
      <Header />
      <Timeline
        groups={groups}
        items={items}
        sidebarWidth={200}
        dragSnap={30 * 60 * 1000}
        minResizeWidth="30"
        defaultTimeStart={moment().add(-3.5, "hour")}
        defaultTimeEnd={moment().add(3.5, "hour")}
        lineHeight="141"
        itemHeightRatio="0.94"
        timeSteps={{
          second: 0,
          minute: 30,
          hour: 1,
          day: 1,
          month: 1,
          year: 1,
        }}
        className="cg-timeline"
      >
        <TimelineHeaders>
          <SidebarHeader />
          <DateHeader
            unit="day"
            labelFormat="DD. MMMM yyyy"
            style={{ height: 80 }}
          />
          <DateHeader style={{ height: 80 }} />
        </TimelineHeaders>
        <TodayMarker className="timeline-marker" />
      </Timeline>
    </>
  );
}

export default App;
