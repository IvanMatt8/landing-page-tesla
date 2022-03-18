import React, { Children } from "react";

import { Container } from "./styles";

const ModelsWrapper: React.FC = ({ children }) => {
  return <Container>{Children}</Container>;
};

export default ModelsWrapper;
