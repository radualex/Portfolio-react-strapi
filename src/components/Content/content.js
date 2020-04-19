import style from "styled-components";

const Content = style.div`
  padding: .5rem 0;
`;

const ContentStats = style.div`
display: flex;
align-items: center;
padding: .4rem 0;

div {
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 0.5rem;
  }

  img {
    margin: 0;
  }

  span {
    color: #151516;
    margin-left: 0.3rem;
    font-size: 13px;
  }
}
`;

const ContentLanguages = style.div`
  padding: 0;
`;

export { Content, ContentStats, ContentLanguages };
