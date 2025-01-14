import { useEffect, useState } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import styled from "styled-components";
import PropTypes from "prop-types";
// import { theme } from "../../../styles";
import Pagination from "./Pagination";

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
    {
      id: 3,
      serverName: "Server Gamma",
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
      id: 4,
      serverName: "Server Zeta",
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
    {
      id: 5,
      serverName: "Server Epsilon",
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
      id: 6,
      serverName: "Server Theta",
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
    {
      id: 7,
      serverName: "Server Celio",
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
      id: 8,
      serverName: "Server Bruke",
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
    {
      id: 9,
      serverName: "Server Chi",
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
      id: 10,
      serverName: "Server Dist",
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
    {
      id: 11,
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
      id: 12,
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
    {
      id: 13,
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
      id: 14,
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
    {
      id: 15,
      serverName: "Server Gamma",
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
      id: 16,
      serverName: "Server Zeta",
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
    {
      id: 17,
      serverName: "Server Epsilon",
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
      id: 18,
      serverName: "Server Theta",
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
    {
      id: 19,
      serverName: "Server Celio",
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
      id: 20,
      serverName: "Server Bruke",
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
  max-height: 500px;
  overflow-y: auto;
  overflow-x: auto;
  border: 1px solid #e4e4e4;
  border-radius: 0.45rem;
  position: relative;
`;

const SearchInputContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
  height: 60px;
`;

const SearchInput = styled.input`
  font-size: 1.1rem;
  height: 37px;
  width: 100%;
  max-width: 300px;
  margin-top: 1.2rem;
  color: #727272;
  background-color: #f9f9f9;
  border: 1px solid #e4e4e4;
  border-radius: 0.45rem;
  padding-left: 2.2rem;

  &:focus-visible {
    outline: none;
  }

  &:focus {
    border: 1px solid #e4e4e4;
  }

  &::placeholder {
    /* padding-left: 2.5rem; */
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 40%;
`;

const PaginationContainer = styled.div`
  background: ${(props) => props.theme.colors.lightBackground};
  padding: 3px 10px 13px 10px;
  margin-top: 10px;
  border-radius: 7px;
`;

export const CustomTable = ({
  data = DBdata,
  columns = DBcolumns,
  filterColumn,
  placeholder = "Search...",
  searchIcon = null,
  showPagination = true,
  onChange,
}) => {
  const [search, setSearch] = useState("");

  // let filteredData = {
  //   nodes: filterColumn
  //     ? data?.nodes?.filter((node) =>
  //         node[filterColumn]
  //           ?.toString()
  //           ?.toLowerCase()
  //           ?.includes(search.toLowerCase())
  //       )
  //     : data.nodes,
  // };

  const tableTheme = useTheme([
    getTheme(),
    {
      Table: `
      --data-table-library_grid-template-columns: ${columns
        .map((column) => column.width || "auto")
        .join(" ")} !important;
        margin-bottom: 0;
        // cellspacing="0"
        // margin-left: 10px;
        // padding-left: 10px;


        th {
          border-bottom: 1.5px solid #E4E4E4;
          border-top: 1.5px solid #E4E4E4;
          margin-bottom: 12px;
        }

        td {
          border-bottom: 1.5px solid #E4E4E4;
          border-top:1.5px solid #E4E4E4;
          margin-bottom: 12px;
        }

        th {
          height: 50px ;
          background-color: #F9F9F9 !important;
          color: #727272 !important;
        }

        // th:first-child, td:first-child {
        // border-left: 1.5px solid #E4E4E4;
        // border-radius: 0.45rem 0 0 0.45rem;
        // }

        // th:last-child, td:last-child {
        // border-right: 1.5px solid #E4E4E4;
        // border-radius: 0 0.45rem 0.45rem 0;
        // }

          th:first-of-type, td:first-of-type {
          border-left: 1.5px solid #E4E4E4;
          border-radius: 0.45rem 0 0 0.45rem;
          }

          th:last-of-type, td:last-of-type {
          border-right: 1.5px solid #E4E4E4;
          border-radius: 0 0.45rem 0.45rem 0;
          }

        td {
          height: 66px;
        }

        tbody tr:nth-of-type(even) td {
          background-color: #F9FAFC !important;
        }
      `,
    },
  ]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const indexOfLastItem = currentPage * rowsPerPage;
  // const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  // const currentItems = data.nodes.slice(indexOfFirstItem, indexOfLastItem);

  const pageSize = rowsPerPage;
  function getPaginatedData(data, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.nodes.slice(startIndex, endIndex);
  }

  let paginatedNodes = getPaginatedData(data, currentPage, pageSize);

  let filteredData = {
    nodes: filterColumn
      ? paginatedNodes.filter((node) =>
          node[filterColumn]
            ?.toString()
            ?.toLowerCase()
            ?.includes(search.toLowerCase())
        )
      : paginatedNodes,
  };

  // if (showPagination) {
  //   filteredData = {
  //     nodes: data.nodes.slice(indexOfFirstItem, indexOfLastItem),
  //   };
  // }

  useEffect(() => {
    setCurrentPage(1);
  }, [data, rowsPerPage]);

  return (
    <>
      {filterColumn && (
        <SearchInputContainer>
          {/* <label htmlFor="search">Search by {filterColumn}:&nbsp;&nbsp;</label>*/}
          {searchIcon && <SearchIconWrapper>{searchIcon}</SearchIconWrapper>}
          <SearchInput
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
          />
        </SearchInputContainer>
      )}
      <ScrollableTableContainer>
        <CompactTable
          data={filteredData}
          columns={columns.map((column) => ({
            ...column,
            renderCell: (item) =>
              column.renderCell ? column.renderCell(item, onChange) : null,
          }))}
          layout={{ horizontalScroll: false, verticalScroll: true }}
          theme={tableTheme}
        />
      </ScrollableTableContainer>
      {data.nodes.length && showPagination && (
        <PaginationContainer>
          <Pagination
            page={currentPage}
            count={data.nodes.length}
            setCurrentPage={setCurrentPage}
            itemsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />
        </PaginationContainer>
      )}
    </>
  );
};

CustomTable.propTypes = {
  data: PropTypes.object,
  columns: PropTypes.array,
  filterColumn: PropTypes.string,
  placeholder: PropTypes.string,
  searchIcon: PropTypes.node,
  showPagination: PropTypes.bool,
  rowsPerPage: PropTypes.number,
  onChange: PropTypes.func,
};
