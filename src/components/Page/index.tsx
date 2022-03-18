import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelsWrapper, ModelSection } from "../Model";
import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Página One",
            "Página Two",
            "Página Three",
            "Página Four",
            "Página Five",
            "Página Six",
            "Página Seven",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
