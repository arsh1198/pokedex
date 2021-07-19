import * as React from "react";
import styled from "styled-components";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../../theme/theme";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.header};
  width: 100%;
  padding: 1.25em;
  z-index: 5;
`;

const Header = () => {
  const theme = useTheme();
  return (
    <Container theme={theme}>
      <Search />
      <ThemeToggle />
    </Container>
  );
};

export default Header;
