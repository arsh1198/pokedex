import * as React from "react";
import styled from "styled-components";
import TypeSelect from "../TypeSelect";
import GenSelect from "../GenSelect";
import PokemonCards from "./PokeCards";
import { motion } from "framer-motion";
import { useTheme } from "../../theme/theme";
import { Route, Router, Switch, useHistory } from "react-router-dom";

const Container = styled(motion.main)`
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  padding: 1.5em 4em;
  align-items: center;
  min-height: 100vh;
`;
const Main = () => {
  const theme = useTheme();
  const history = useHistory();

  return (
    <Container layout theme={theme}>
      <Router history={history}>
        <Switch>
          <Route path="/type/:pokemonType?" component={TypeSelect}></Route>
          <Route path="/gen/:generation?" component={GenSelect}></Route>
        </Switch>
        <Route path="/" component={PokemonCards}></Route>
      </Router>
    </Container>
  );
};

export default Main;
