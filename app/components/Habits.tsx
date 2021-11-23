import tw, { styled, TwStyle, css } from "twin.macro";

const HabitsContainer = styled.div`
  ${tw`bg-yellow text-white flex justify-center content-center`}
`;
const HabitContainer = styled.div`
  ${tw`text-blue flex justify-center content-center`}
`;

interface HighLightProps {
  containerStyles: TwStyle;
}

const habits = [
  {
    title: "Yoga",
    _id: 1,
    status: "ACTIVE"
  }
];

const dates = [
  {
    activity: [
      {
        date: "11/11/2021",
        _id: 2,
        is_done: true
      }
    ]
  }
];

export const Habits: React.FC<HighLightProps> = props => {
  return (
    <HabitsContainer>
      {habits.map(habit => (
        <div>{habit.title}</div>
      ))}
    </HabitsContainer>
  );
};
