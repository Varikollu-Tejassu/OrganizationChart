import React, { useState, useRef, useLayoutEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { OrgChart } from "d3-org-chart";
import CustomNodeContent from "./customNodeContent";
import CustomExpandButton from "./customExpandButton";


const OrganizationalChart = (props) => {
  const d3Container = useRef(null);

  useLayoutEffect(() => {
  
    const chart = new OrgChart();
    if (props.data && d3Container.current) {
      chart
        .container(d3Container.current)
        .data(props.data)
        .nodeWidth((d) => 300)
        .nodeHeight((d) => 140)
        .compactMarginBetween((d) => 80)
        .onNodeClick((d) => {
        })
        .buttonContent((node, state) => {
          return ReactDOMServer.renderToStaticMarkup(
            <CustomExpandButton {...node.node} />
          );
        })
        .nodeContent((d) => {
          return ReactDOMServer.renderToStaticMarkup(
            <CustomNodeContent {...d} />
          );
        })
        .render();
    }
  }, [props, props.data]);

  return (
    <div className="org-chart" ref={d3Container}>
    </div>
  );
};

export default OrganizationalChart;