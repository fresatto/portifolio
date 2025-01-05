import styled from "styled-components";

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${(props) => props.theme.media.largeDesktop} {
    flex-direction: row;
  }
`;

export const ServiceWrapper = styled.div`
  border: 1px solid #eee;
  padding: 32px;

  ${(props) => props.theme.media.largeDesktop} {
    width: 50%;
  }

  > img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 16px;
  }

  > h3 {
    font-weight: bold;
  }

  ul {
    list-style-type: circle;
    margin-left: 15px;
    color: ${(props) => props.theme.colors.text};

    > li + li {
      margin-top: 16px;
    }
  }
`;
