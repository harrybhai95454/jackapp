import React from "react";
import Modal from "./Modal";
import styled from "styled-components";

const Container = styled.div`
  display: ${props => (props.show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  margin-top: 1.5rem;
`;

const DeleteConfirm = props => {
  return (
    <Modal title="Deleting account..." show={props.show} exit={props.exit}>
      <Container show={props.show}>
        Do you want to delete this account <br />
        and all of its data??
      </Container>
    </Modal>
  );
};

export default DeleteConfirm;
