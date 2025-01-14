import styled from "styled-components";
import { ImportantNotice, CustomTable } from "../../components/shared/common/";
import Button from "../../components/shared/common/Button";
import { useState } from "react";
import AddGeoCreditsModal from "./AddGeoCreditsModal";
import { toast } from "react-toastify";

const Container = styled.div`
  /* margin-top: 5rem; */
`;

const NoticeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TableWrapper = styled.div`
  margin-top: 2rem;
  background-color: #fff;
`;

const GCdata = {
  nodes: [
    {
      srNo: 1,
      name: "Nimble",
      emailId: "info@nimble-this.com",
      apiKey: "2d98abbb969170afee18f7ecc002d6d6",
      creditsGiven: "for geocoding of 2582 modems",
      creditsRemaining: "can be used for geocoding of 3654 modems",
    },
    {
      srNo: 2,
      name: "test",
      emailId: "test@ac.com",
      apiKey: "0695cdac6081c17c28c97d1ebee67662",
      creditsGiven: "for geocoding of 2020 modems",
      creditsRemaining: "can be used for geocoding of 0 modems",
    },
    {
      srNo: 3,
      name: "Nimble",
      emailId: "info@nimble-this.com",
      apiKey: "49192c5a58357417d00d27de6c61d562",
      creditsGiven: "for geocoding of 2950 modems",
      creditsRemaining: "can be used for geocoding of 0 modems",
    },
  ],
};

const GCcolumns = [
  { label: "Sr. No", renderCell: (item) => item.srNo },
  { label: "Name", renderCell: (item) => item.name },
  { label: "Email Id", renderCell: (item) => item.emailId },
  { label: "Api Key", renderCell: (item) => item.apiKey },
  { label: "Credits Given", renderCell: (item) => item.creditsGiven },
  { label: "Credits Remaining", renderCell: (item) => item.creditsRemaining },
];
export const GeoCoding = () => {
  const [isAddGeoCreditsModalOpen, setIsAddGeoCreditsModalOpen] =
    useState(false);

  const handleGeoCreditsModalClose = () => {
    setIsAddGeoCreditsModalOpen(false);
  };

  const handlePasswordSubmit = (data) => {
    console.log("Password updated:", data);
    toast.success("Geo Credits added successfully!");
    setIsAddGeoCreditsModalOpen(false);
  };

  return (
    <Container>
      <p>Breadcrumb &gt; GeoCoding</p>
      <NoticeWrapper>
        <ImportantNotice
          title="Important Notice:"
          message="150 modems can be geocoded for $1."
        />
        <Button
          size="sm"
          variant="primary"
          onClick={() => {
            setIsAddGeoCreditsModalOpen(true);
            console.log("Save Details clicked");
          }}
          style={{
            width: "8rem",
            height: "2.2rem",
          }}
        >
          <div
            className="d-flex"
            style={{ fontSize: "14px", fontWeight: "750" }}
          >
            <span>Add Geo-Credits</span>
          </div>
        </Button>
      </NoticeWrapper>
      <TableWrapper>
        <CustomTable data={GCdata} columns={GCcolumns} />
      </TableWrapper>

      <AddGeoCreditsModal
        isOpen={isAddGeoCreditsModalOpen}
        onRequestClose={handleGeoCreditsModalClose}
        onSubmit={handlePasswordSubmit}
      />
    </Container>
  );
};
