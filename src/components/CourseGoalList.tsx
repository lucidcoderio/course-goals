import { type ReactNode, type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalListProps = {
  goals: Array<CGoal>;
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({
  goals,
  onDeleteGoal,
}: CourseGoalListProps): ReactNode => {
  return goals.map((goal) => {
    return (
      <li key={goal.id}>
        <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
          {goal.description}
        </CourseGoal>
      </li>
    );
  });
};

export default CourseGoalList;
