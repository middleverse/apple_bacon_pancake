import tw, { styled, TwStyle, css } from "twin.macro";

const HabitsContainer = styled.div`
  ${tw`bg-yellow text-blue flex justify-center content-center`}
`;

const HabitContainer = styled.div`
  height: 36px;
  width: 36px;
  ${tw`flex justify-center relative`};
`;

const HabitsWarapper = styled.div`
  ${tw`m-5 mt-6`};
`;

const HabitTitleContainer = styled.div`
  ${tw`h-24 relative`}
`;

const HabitTitle = styled.div`
  ${tw`transform rotate--45 absolute font-bold w-full pt-20`}
`;

const DoneHabit = styled.div`
  width: 12px;
  height: 12px;
  ${tw`rounded-xl absolute z-10`}
`;

const DefaultHabit = styled.div`
  width: 12px;
  height: 12px;
  ${tw`bg-grey rounded-xl absolute z-0`}
`;

const DatesContainer = styled.div`
  ${tw`mt-28 pt-1 font-bold text-right mr-5 leading-7 text-sm`}
`;

const DateContainer = styled.div`
  ${tw`mb-4`}
`;

const habits = [
  {
    title: "Yoga",
    _id: 1,
    status: "ACTIVE",
    activities: [
      {
        start_date: "04/11/2021",
        end_date: "08/11/2021",
        streak: 3,
      },
    ],
  },
  {
    title: "Workout",
    _id: 2,
    status: "ACTIVE",
    activities: [
      {
        start_date: "04/11/2021",
        end_date: "08/11/2021",
        streak: 5,
      },
    ],
  },
  {
    title: "Read",
    _id: 2,
    status: "ACTIVE",
    activities: [
      {
        start_date: "02/11/2021",
        end_date: "09/11/2021",
        streak: 2,
      },
    ],
  },
  {
    title: "Meditation",
    _id: 2,
    status: "ACTIVE",
    activities: [
      {
        start_date: "03/11/2021",
        end_date: "10/11/2021",
        streak: 1,
      },
    ],
  },
  {
    title: "Run",
    _id: 2,
    status: "ACTIVE",
    activities: [
      {
        start_date: "04/11/2021",
        end_date: "08/11/2021",
        streak: 5,
      },
    ],
  },
];

const dates = [
  "10/11/2021",
  "11/11/2021",
  "09/11/2021",
  "08/11/2021",
  "07/11/2021",
  "06/11/2021",
  "05/11/2021",
  "04/11/2021",
  "03/11/2021",
  "02/11/2021",
];

export const Habits: React.FC = () => {
  return (
    <HabitsContainer>
      <DatesContainer>
        {dates.map((date, dateIndex) => (
          <DateContainer key={date}>{date}</DateContainer>
        ))}
      </DatesContainer>
      <HabitsContainer>
        {habits.map((habit, habitIndex) => (
          <div key={habit.title}>
            <HabitTitleContainer>
              <HabitTitle>{habit.title}</HabitTitle>
            </HabitTitleContainer>
            <HabitsWarapper>
              {dates.map((date) => (
                <div>
                  {habit.activities.map(({ end_date, streak }) => (
                    <div>
                      {end_date === date ? (
                        <HabitContainer key="{habit.title}-{index}">
                          <DoneHabit
                            style={{
                              height: 36 * (streak - 1) + 12 + "px",
                            }}
                            css={[
                              streak === 1 && tw`bg-orange`,
                              streak > 1 && streak < 4 && tw`bg-orangePink`,
                              streak > 4 &&
                                tw`animate-wiggle bg-red animate-redGradint`,
                            ]}
                          />
                          {/* {streak > 4 && (
                            <DoneHabit
                              style={{
                                height: 36 * (streak - 1) + 12 + "px",
                              }}
                              css={tw`animate-redGradint`}
                            />
                          )} */}
                        </HabitContainer>
                      ) : (
                        <HabitContainer key="{habit.title}-{index}">
                          <DefaultHabit />
                        </HabitContainer>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </HabitsWarapper>
          </div>
        ))}
      </HabitsContainer>
    </HabitsContainer>
  );
};
