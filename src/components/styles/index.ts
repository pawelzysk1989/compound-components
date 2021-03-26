import styled from "styled-components";

export const TitleWrapper = styled.span<{
  disabled?: boolean;
  isSelected?: boolean;
}>`
  color: ${(props) => (props?.disabled ? "grey" : "black")};
  font-weight: ${(props) => (props?.isSelected ? 500 : 400)};
`;

export const LabelWrapper = styled.div<{
  disabled: boolean;
  isSelected: boolean;
}>`
  padding: 0.2rem 0.3rem;
  border: 1px solid palevioletred;
  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
  background-color: ${(props) => (props.isSelected ? "grey" : "yellow")};
`;

export const LabelGroupWrapper = styled.div`
  display: flex;
  ${LabelWrapper} + ${LabelWrapper} {
    margin-left: 0.3rem;
  }
`;
