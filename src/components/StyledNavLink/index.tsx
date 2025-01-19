import { NavLink } from "react-router";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text};

  &.active {
    color: ${(props) => props.theme.colors.textBold};
  }

  img {
    filter: grayscale(1);
  }
`;

export default StyledNavLink;
