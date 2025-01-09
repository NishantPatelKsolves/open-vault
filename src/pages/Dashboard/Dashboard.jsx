import { useState } from "react";
import { Collapsible } from "../../components/shared/common/";

const collapsibleDemoData = [
  {
    title: "Collapsible 1",
    content: "This is the content for Collapsible 1",
  },
  {
    title: "Collapsible 2",
    content: "This is the content for Collapsible 2",
  },
];

export const Dashboard = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // console.log("Dashboard Rendered");

  return (
    <div>
      <h2>Dashboard</h2>
      {collapsibleDemoData.map((d, index) => {
        return (
          <Collapsible
            key={index}
            title={d.title}
            isTableOpen={openIndex === index}
            toggleCollapsible={() => handleToggle(index)}
          >
            {d.content}
          </Collapsible>
        );
      })}
    </div>
  );
};
