import React from "react";
import commitImg from "../../assets/icons/commit.svg";
import {
  Wrapper,
  IntroWrapper,
  Details,
  Thumbnail,
  WrapperCenter,
} from "./styles";
import { useSiteMetadata } from "./api";

export const Intro = () => {
  return (
    <Wrapper>
      <IntroWrapper>
        <Details>
          <WrapperCenter>
            <h1>Hi There! I'm {useSiteMetadata().author}.</h1>
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
