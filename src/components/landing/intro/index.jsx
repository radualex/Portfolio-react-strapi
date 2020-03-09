import React from 'react'
import commitImg from '../../../assets/icons/commit.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<IntroWrapper>
			<Details>
				<h1>Hi There!</h1>
				<h4>"Quote to quote, paycheck to paycheck" - Radu Stoica</h4>
			</Details>
			<Thumbnail>
				<img src={commitImg} alt="I’m John and I’m a Backend & Devops engineer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)