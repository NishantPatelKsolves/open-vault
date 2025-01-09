import { useState } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import styled from "styled-components";

const data = {
  nodes: [
    {
      id: 1,
      serverName: "Server Alpha",
      cmtsCount: 5,
      cmtsOnline: 4,
      totalModems: 1200,
      changeModems30Days: 50,
      changeModems90Days: 150,
      redYellowGreenGreyModems: "30, 50, 1000, 120",
      softwareVersion: "v1.2.3",
      licenseExpirationDate: "2025-06-15",
      currentCpuUtilization: "70%",
      lastSnmpPollerTime: "2025-01-08 14:30:00",
    },
    {
      id: 2,
      serverName: "Server Beta",
      cmtsCount: 8,
      cmtsOnline: 7,
      totalModems: 2200,
      changeModems30Days: 80,
      changeModems90Days: 300,
      redYellowGreenGreyModems: "40, 60, 1800, 300",
      softwareVersion: "v2.1.0",
      licenseExpirationDate: "2024-12-01",
      currentCpuUtilization: "65%",
      lastSnmpPollerTime: "2025-01-08 12:15:00",
    },
  ],
};

const columns = [
  { label: "Sr. No", renderCell: (item) => item.id },
  { label: "Server Name", renderCell: (item) => item.serverName },
  { label: "#CMTSs", renderCell: (item) => item.cmtsCount },
  { label: "CMTSs Online", renderCell: (item) => item.cmtsOnline },
  { label: "Total Modems", renderCell: (item) => item.totalModems },
  {
    label: "Change Total Modems Past 30 Days",
    renderCell: (item) => item.changeModems30Days,
  },
  {
    label: "Change Total Modems Past 90 Days",
    renderCell: (item) => item.changeModems90Days,
  },
  {
    label: "Total red, yellow, green, and grey modems",
    renderCell: (item) => item.redYellowGreenGreyModems,
  },
  { label: "Software Version", renderCell: (item) => item.softwareVersion },
  {
    label: "License Expiration Date",
    renderCell: (item) => item.licenseExpirationDate,
  },
  {
    label: "Current CPU Utilization",
    renderCell: (item) => item.currentCpuUtilization,
  },
  {
    label: "Last Successful SnmpPoller cron time",
    renderCell: (item) => item.lastSnmpPollerTime,
  },
];

const ScrollableTableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

const StyledTable = styled(CompactTable)`
  min-width: 1500px;
`;

const SearchInputContainer = styled.div`
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  /* padding: 8px; */
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
  margin-top: 1.5rem;
  color: #333;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const CustomTable = () => {
  const [search, setSearch] = useState("");
  const filteredData = {
    nodes: data.nodes.filter((node) =>
      node.serverName.toLowerCase().includes(search.toLowerCase())
    ),
  };
  return (
    <>
      <SearchInputContainer>
        <label htmlFor="search">Search Server Name:&nbsp;&nbsp; </label>
        <SearchInput
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchInputContainer>
      <ScrollableTableContainer>
        {/* <CompactTable
        data={data}
        columns={columns}
        layout={{ horizontalScroll: true }}
        /> */}
        <StyledTable
          // data={data}
          data={filteredData}
          columns={columns}
          layout={{ horizontalScroll: true }}
        />
      </ScrollableTableContainer>
    </>
  );
};
