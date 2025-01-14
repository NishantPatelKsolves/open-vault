import styled from "styled-components";
import { CustomTable } from "../../components/shared/common/";
import { SearchIcon } from "../../assets/icons";
import MaxRepetitionField from "../../components/shared/common/MaxRepetitionField";
import Button from "../../components/shared/common/Button";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1450px;
  height: 80vh;
  padding: 1rem;
  border-radius: 15px;
  background-color: #ffffff;
`;

const TableWrapper = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  padding: 1.5rem;
  max-height: calc(100% - 4rem);
  overflow-y: auto;
  border-radius: 15px;
  width: 100%;
`;

const GCdata = {
  nodes: [
    {
      vendor: "Cisco",
      model: "Cisco EPC3010",
      softwareVersion: "e3000-v302r125533-110811c",
      maxRepitition: 2,
      waitTime: 45,
      status: 2,
    },
    {
      vendor: "Motorola",
      model: "Motorola Corporation SB5101N",
      softwareVersion: "SB5101NUE-2.1.7.0-GA-00-388-NOSH",
      maxRepitition: 2,
      waitTime: 45,
      status: 1,
    },
    {
      vendor: "Motorola",
      model: "Motorola Corporation SB5101NE",
      softwareVersion: "SB5101NUE-2.10.1.0-GA-01-567-NOSH",
      maxRepitition: 2,
      waitTime: 45,
      status: 0,
    },
    {
      vendor: "Thomson",
      model: "Thomson TCW750-4",
      softwareVersion: "STA3.66.05",
      maxRepitition: 2,
      waitTime: 45,
      status: 2,
    },
    {
      vendor: "Thomson",
      model: "Thomson TWG850-4",
      softwareVersion: "ST9B.66.04",
      maxRepitition: 2,
      waitTime: 45,
      status: 2,
    },
    {
      vendor: "Technicolor",
      model: "Thomson TCW770",
      softwareVersion: "STB6.66.05",
      maxRepitition: 2,
      waitTime: 45,
    },
    {
      vendor: "Technicolor",
      model: "Cisco EPC3928",
      softwareVersion: "e3928-ES-16-c3100r5593-160323r-TRU",
      maxRepitition: 2,
      waitTime: 45,
      status: 3,
    },
    {
      vendor: "Technicolor",
      model: "Technicolor TC7200.TH2v2",
      softwareVersion: "SC05.00.20",
      maxRepitition: 2,
      waitTime: 45,
      status: 1,
    },
    {
      vendor: "HUMAX",
      model: "HUMAX HG100RE-02",
      softwareVersion: "VER 1.2.7",
      maxRepitition: 2,
      waitTime: 45,
      status: 0,
    },
    {
      vendor: "HUMAX",
      model: "Cisco EPC3925",
      softwareVersion: "e3925-ES-16-c1100r5593-151110c",
      maxRepitition: 2,
      waitTime: 45,
      status: 1,
    },
  ],
};

const GCcolumns = [
  { label: "Vendor", renderCell: (item) => item.vendor },
  { label: "Model", renderCell: (item) => item.model },
  { label: "Software Version", renderCell: (item) => item.softwareVersion },
  {
    label: "Max Repitition",
    renderCell: (item, onChange) => (
      <MaxRepetitionField
        value={item.maxRepitition}
        min={1}
        max={80}
        defalutValue={2}
        onChange={(newValue) => onChange(item, "maxRepitition", newValue)}
      />
    ),
  },
  {
    label: "Wait Time",
    renderCell: (item, onChange) => (
      <MaxRepetitionField
        value={item.waitTime}
        min={0}
        max={120}
        defalutValue={45}
        onChange={(newValue) => onChange(item, "waitTime", newValue)}
      />
    ),
  },
  {
    label: "Status",
    renderCell: (item, onChange) => (
      <MaxRepetitionField
        value={item.status}
        min={0}
        max={3}
        defalutValue={1}
        onChange={(newValue) => onChange(item, "status", newValue)}
      />
    ),
  },
  {
    label: "Action",
    renderCell: (item, onChange) => (
      <Button
        size="sm"
        variant="primary"
        onClick={() => {
          const newValue = "change";
          onChange(item, "action", newValue);
        }}
        style={{
          padding: "12px 22px",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        Change
      </Button>
    ),
  },
];

export const FBCMaster = () => {
  const [data, setData] = useState(GCdata.nodes);

  const handleChange = (item, field, value) => {
    const updatedData = data.map((data) => {
      if (data.model === item.model) {
        return { ...data, [field]: value };
      }
      return data;
    });

    setData(updatedData);

    const updatedItem = updatedData.find((data) => data.model === item.model);
    console.log("Updated Item:", updatedItem);
  };

  return (
    <Container>
      {" "}
      <TableWrapper>
        <CustomTable
          filterColumn="model"
          data={GCdata}
          columns={GCcolumns}
          placeholder="Search by Model"
          searchIcon={<SearchIcon />}
          onChange={handleChange}
        />
      </TableWrapper>
    </Container>
  );
};
