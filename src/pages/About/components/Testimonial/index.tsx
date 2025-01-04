import { Typography } from "@mui/material";
import React from "react";

import { Container, AuthorWrapper } from "./styles";

const Testimonial: React.FC = () => {
  return (
    <Container>
      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sed, quos
        odio, ullam debitis et molestiae expedita nemo, fugiat natus tenetur
        nobis. Exercitationem, beatae reiciendis accusantium quidem eligendi
        nulla debitis.
      </Typography>

      <AuthorWrapper>
        <img src="https://i.pinimg.com/736x/90/11/3f/90113f0ebe42224eb0c567a3f820f066.jpg" />
        <div>
          <strong>Diogo Soares</strong>
          <Typography fontSize={"small"} fontWeight="500">
            Desenvolvedor Front-End
          </Typography>
        </div>
      </AuthorWrapper>
    </Container>
  );
};

export default Testimonial;
