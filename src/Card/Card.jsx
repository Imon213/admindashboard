import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
const Card = (props) => {
  const [Expanded, setExpanded] = useState(false);
  return (
    <div className="card">
      <AnimateSharedLayout>
        {Expanded ? (
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        ) : (
          <CompactCard param={props} setExpanded={() => setExpanded(true)} />
        )}
      </AnimateSharedLayout>
    </div>
  );
};
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.background,
        boxshadow: param.color.boxshadow,
      }}
      onClick={setExpanded}
      layoutId='expandableCard'
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="details">
        <Png />
        <span>{param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color:"#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      // xaxis: {
      //   type: "datetime",
      //   categories: [
      //     "2022-09-19T00-00-00.000Z",
      //     "2022-09-19T01-30-00.000Z",
      //     "2022-09-19T02-30-00.000Z",
      //     "2022-09-19T03-30-00.000Z",
      //     "2022-09-19T04-30-00.000Z",
      //     "2022-09-19T05-30-00.000Z",
      //     "2022-09-19T06-30-00.000Z",
      //   ],
      // },
    },
  };
  return (
    <motion.div
    
      className="ExpandedCard"
      style={{
        background: param.color.background,
        boxshadow: param.color.boxshadow,
      }}
      layoutId='expandableCard'
    >
      <div>
        <UilTimes onClick={setExpanded} />
        <span>{param.title}</span>
      </div>
      
      <div className="chart-container">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span className="hrs">Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
