import tw, { styled, TwStyle, css } from "twin.macro";

const HabitsContainer = styled.div`
  ${tw`bg-blue flex justify-center content-center`}
`;

interface HighLightProps {
  containerStyles: TwStyle;
}

export const Habits: React.FC<HighLightProps> = props => {
  return <HabitsContainer>HABITS</HabitsContainer>;
};
