import { useState } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../../styles";

const DBdata = {
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

const DBcolumns = [
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

const SearchInputContainer = styled.div`
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
  margin-top: 1.5rem;
  color: #333;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const CustomTable = ({
  data = DBdata,
  columns = DBcolumns,
  filterColumn,
}) => {
  const [search, setSearch] = useState("");

  const filteredData = {
    nodes: filterColumn
      ? data?.nodes?.filter((node) =>
          node[filterColumn]
            ?.toString()
            ?.toLowerCase()
            ?.includes(search.toLowerCase())
        )
      : data.nodes,
  };

  const tableTheme = useTheme([
    getTheme(),
    {
      Table: `
      --data-table-library_grid-template-columns: ${columns
        .map((column) => column.width || "auto")
        .join(" ")} !important;
        margin-bottom: 0;

        th, td {
          border-bottom: none !important;
        }
        th {
          height: 48px;
          background-color: ${theme.colors.lightGrey} !important;
          color:  ${theme.colors.darker} !important;
        }

        td {
          height: 60px;
        }

        tbody tr:nth-of-type(even) td {
          background-color: ${theme.colors.lightGrey} !important;
        }
      `,
    },
  ]);

  return (
    <>
      {filterColumn && (
        <SearchInputContainer>
          <label htmlFor="search">Search by {filterColumn}:&nbsp;&nbsp;</label>
          <SearchInput
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchInputContainer>
      )}
      <ScrollableTableContainer>
        <CompactTable
          data={filteredData}
          columns={columns}
          layout={{ horizontalScroll: true }}
          theme={tableTheme}
        />
      </ScrollableTableContainer>
    </>
  );
};

CustomTable.propTypes = {
  data: PropTypes.object,
  columns: PropTypes.array,
  filterColumn: PropTypes.string,
};
