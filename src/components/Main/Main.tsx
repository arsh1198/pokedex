import * as React from "react";
import styled from "styled-components";
import TypeSelect from "../TypeSelect";
import GenSelect from "../GenSelect";
import PokemonCards from "./PokeCards";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useTheme } from "../../theme/theme";
import {
  Route,
  Router,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import useStore from "../../Store";
import PokemonCardEx from "../PokeCardEx";

const Container = styled.main`
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
  const filter = useStore((state) => state.filter);
  const params = new URLSearchParams(useLocation().search).toString();
  return (
    <Container theme={theme}>
      {params.includes("type") && <TypeSelect />}
      {params.includes("generation") && <GenSelect />}
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={PokemonCards} />

          <Route path="/pokemon/:name" component={PokemonCardEx} />
        </Switch>
      </Router>
    </Container>
  );
};

export default Main;
