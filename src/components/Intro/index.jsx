import React from "react";
import commitImg from "../../assets/icons/commit.svg";
import Header from "./header";
import {
  Wrapper,
  IntroWrapper,
  Details,
  Thumbnail,
  WrapperCenter
} from "./styles";
import { useStaticQuery, graphql } from "gatsby"

export const Intro = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Wrapper>
      <IntroWrapper>
        <Details>
          <WrapperCenter>
            <h1>Hi There! I'm Radu.</h1>
            <h4>I'm a web developer.</h4>
          </WrapperCenter>
        </Details>
        {/* <Thumbnail>
				<img src={commitImg} alt="I’m John and I’m a Backend & Devops engineer!" />
			</Thumbnail> */}
      </IntroWrapper>
    </Wrapper>
  );
};
