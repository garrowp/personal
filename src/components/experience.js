/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import ExperienceArrow from "./arrows/experience-arrow"
import ExperienceToContactArrow from "./arrows/experience-to-contact"

import { ExperienceCard } from "./card"
import byu from "../images/byu.png"
import adobe from "../images/adobe.png"
import byuAthletics from "../images/byu_athletics.png"
import { Wrapper } from "./common"

const ExperienceHeaderWrapper = styled.div`
	grid-row: 1;
	grid-column: 2 / 4;

	@media screen and (max-width: 1100px) {
		grid-column: 1 / 3;
	}
`

const ExperienceWrapper = styled.div`
	grid-row: 2;
	grid-column: 2 / 4;
	padding-bottom: 5rem;
	z-index: 100;

	@media screen and (max-width: 1100px) {
		grid-column: 1 / 3;
	}
`

export const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;

	@media screen and (max-width: 950px) {
		display: flex;
		flex-direction: column;
	}
`

export const StyledUl = styled.ul`
	font-size: 0.8rem;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;

	& a {
		text-decoration: none;
		color: initial;
		border-bottom: 1px dotted #000;
	}
`

const Experience = () => (
	<div id="experience" sx={{ backgroundColor: `background` }}>
		<Wrapper>
			<ExperienceHeaderWrapper>
				<h1 style={{ marginTop: `4.5rem` }}>Experience</h1>
			</ExperienceHeaderWrapper>
			<ExperienceWrapper>
				<h3>Some of the things that I've done:</h3>
				<CardContainer>
					<ExperienceCard
						employer="Brigham Young University"
						startDate="Jan '19"
						endDate="Present"
						image={byu}
						title="Research &amp; Teacher's Assistant"
					>
						<StyledUl>
							<li>
								Analyze survey data to discover trends,
								correlations, and significant figures predict
								retention for women in technological education{" "}
							</li>
							<li>
								Explore the effect of smart personal assistants
								as educational tutors to distribute the load on
								TAs and professors while catering to anonymity
								preferences of students
							</li>
							<li>
								Collaborated with the professor to improve
								course curriculum by creating videos, tutorials,
								rubrics, and other supplemental learning
								material
							</li>
						</StyledUl>
					</ExperienceCard>
					<ExperienceCard
						employer="Adobe"
						startDate="May '18"
						endDate="Aug '18"
						image={adobe}
						title="Web UI Software Engineer Intern"
					>
						<StyledUl>
							<li>
								Collaborated with the Adobe Analytics Web UI
								team of 10 in a React environment to fix bugs
								and add two new features to the application
							</li>
							<li>
								Implemented{" "}
								<a
									href="https://www.youtube.com/watch?v=4rrnWwzwb38"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Watch a video about drop down guides"
								>
									new guide indicators
								</a>{" "}
								for drag/drop actions to increase user
								productivity by reducing the need to undo an
								action
							</li>
							<li>
								Created new models and components to allow for{" "}
								<a
									href="https://www.youtube.com/watch?v=vpJywtsFVPI"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Watch a video about segmentation"
								>
									customized segmentation
								</a>{" "}
								of the data being analyzed
							</li>
						</StyledUl>
					</ExperienceCard>
					<ExperienceCard
						employer="BYU Athletics"
						startDate="Jun '17"
						endDate="May '18"
						image={byuAthletics}
						title="Web Developer"
					>
						<StyledUl>
							<li>
								Developed the user-interface and back-end
								programming of department websites which has
								enhanced user experience and improved traffic
								flow by 20%
							</li>
							<li>
								Incorporated web technologies such as Angular,
								Node.JS, MySQl, Drupal, and MongoDB to create
								and manipulate feeds that drive BYU Athletics’
								websites and apps
							</li>
							<li>
								Designed a{" "}
								<a
									href="https://byucougars.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									new website
								</a>{" "}
								to enhance the professional image of BYU
								Athletics that has created more excitement among
								fans compared to the previous website as
								reported by a feedback form
							</li>
						</StyledUl>
					</ExperienceCard>
					<ExperienceCard
						employer="DuPont"
						startDate="May '16"
						endDate="Mar '17"
						image="https://upload.wikimedia.org/wikipedia/en/a/a3/DuPont_logo.svg"
						title="Contracted Programmer"
					>
						<StyledUl>
							<li>
								Designed and programmed a database to store
								DuPont’s Global Microbiology Group recipe and
								batch documentation ensuring a reliable method
								of storing important records{" "}
							</li>
							<li>
								Increased productivity in creating and
								maintaining records by improving database speeds
								by 25%
							</li>
							<li>
								Instructed the group on proper use of the
								database to ensure that the data would be safe,
								contained, and easily accessible as needed
							</li>
						</StyledUl>
					</ExperienceCard>
				</CardContainer>
			</ExperienceWrapper>
			<ExperienceArrow />
			<ExperienceToContactArrow />
		</Wrapper>
	</div>
)

export default Experience
