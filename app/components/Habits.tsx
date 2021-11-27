import tw, { styled, TwStyle, css } from "twin.macro";

const HabitsContainer = styled.div`
  ${tw`bg-yellow text-white flex justify-center content-center`}
`;
const HabitContainer = styled.div`
  ${tw`text-blue flex justify-center content-center`}
`;

const HabitTitleContainer = styled.div`
  ${tw`h-20 relative`}
`;

const HabitTitle = styled.div`
  ${tw`text-blue transform rotate--45 absolute font-bold w-full pt-14`}
`;

const DoneHabit = styled.div`
  ${tw`bg-red rounded-xl p-1.5 m-4`}
`;

const DefaultHabit = styled.div`
  ${tw`bg-grey rounded-xl p-1.5 m-4`}
`;

const habits = [
  {
    title: "Yoga",
    _id: 1,
    status: "ACTIVE"
  },
  {
    title: "Workout",
    _id: 2,
    status: "ACTIVE"
  },
  {
    title: "Read",
    _id: 2,
    status: "ACTIVE"
  }
];

const dates = {
  user_id: "ew", //userid,
  dates: {
    "11/11/2021": {
      date: "11/11/2021",
      activity: [
        {
          activity_id: 1,
          is_done: true
        },
        {
          activity_id: 2,
          is_done: false
        }
      ]
    },
    "11/11/2021": {
      date: "11/11/2021",
      activity: [
        {
          activity_id: 1,
          is_done: true
        },
        {
          activity_id: 2,
          is_done: false
        }
      ]
    }
  }
};

const getActivityArray = function (dates, habit_id) {
  let habitActivity = [true, false, true, true, true];
  return habitActivity;
};

const array = [true, false, true, true, true];

export const Habits: React.FC = () => {
  return (
    <HabitsContainer>
      {habits.map(habit => (
        <div>
          <HabitTitleContainer>
            <HabitTitle>{habit.title}</HabitTitle>
          </HabitTitleContainer>
          {array.map((is_done, index) =>
            is_done ? (
              <DoneHabit key="{habit.title}-{index}"></DoneHabit>
            ) : (
              <DefaultHabit key="{habit.title}-{index}" />
            )
          )}
        </div>
      ))}
    </HabitsContainer>
  );
};
