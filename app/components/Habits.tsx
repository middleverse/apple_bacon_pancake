import tw, { styled, TwStyle, css } from "twin.macro";

const HabitsContainer = styled.div`
  ${tw`bg-yellow text-blue flex justify-center content-center`}
`;
const HabitContainer = styled.div`
  ${tw`p-1.5 m-4 relative`}
`;

const HabitTitleContainer = styled.div`
  ${tw`h-24 relative`}
`;

const HabitTitle = styled.div`
  ${tw`transform rotate--45 absolute font-bold w-full pt-20`}
`;

const DoneHabit = styled.div`
  ${tw`bg-red rounded-xl p-1.5 absolute`}
`;

const DefaultHabit = styled.div`
  ${tw`bg-grey rounded-xl p-1.5 absolute`}
`;

const DatesContainer = styled.div`
  ${tw`mt-28 font-bold text-right mr-5 leading-7`}
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
  },
  {
    title: "Meditation",
    _id: 2,
    status: "ACTIVE"
  },
  {
    title: "Run",
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
    "10/11/2021": {
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
    "09/11/2021": {
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
    "08/11/2021": {
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
    "07/11/2021": {
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
    "06/11/2021": {
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
    "05/11/2021": {
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
    "04/11/2021": {
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

const getDatesArray = function (dates) {
  let array = [];
  for (const date in dates.dates) {
    array.push(date);
  }
  console.log(array);
  return array;
};

const arrays = [
  [true, false, true, true, true, true, false, true, true, true],
  [false, false, true, false, true, true, false, true, true, true],
  [true, true, true, false, true, true, true, true, false, true],
  [true, false, true, true, true, true, false, true, true, true],
  [false, false, true, false, true, true, false, true, true, true]
];

const checkDone = function (habitIndex, itemIndex) {
  return arrays[habitIndex][itemIndex];
};

export const Habits: React.FC = () => {
  return (
    <HabitsContainer>
      <DatesContainer>
        {getDatesArray(dates).map((date, dateIndex) => (
          <div>{date}</div>
        ))}
      </DatesContainer>
      <HabitsContainer>
        {habits.map((habit, habitIndex) => (
          <div>
            <HabitTitleContainer>
              <HabitTitle>{habit.title}</HabitTitle>
            </HabitTitleContainer>
            {arrays[habitIndex].map((is_done, itemIndex) =>
              is_done ? (
                <HabitContainer key="{habit.title}-{index}">
                  <DoneHabit
                    css={[checkDone(habitIndex, itemIndex + 1) && tw`pb-8`]}
                  ></DoneHabit>
                </HabitContainer>
              ) : (
                <HabitContainer key="{habit.title}-{index}">
                  <DefaultHabit />
                </HabitContainer>
              )
            )}
          </div>
        ))}
      </HabitsContainer>
    </HabitsContainer>
  );
};
