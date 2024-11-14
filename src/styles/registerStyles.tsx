import styled from "styled-components";

export const FormWrapper = styled.div`
  height: calc(100vh - 56.6px);
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d232a;
`;

export const Form = styled.form`
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  background-color: #1d232a;
  box-shadow: 0px 4px 8px 5px #7480ff;

  & > svg {
    width: 40px;
    height: 40px;
    color: #00a96e;
  }
`;

export const FSD = styled.span`
  letter-spacing: 2px;
  color: #7480ff;
`;
