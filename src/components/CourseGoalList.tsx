import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import { ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if(goals.length === 0){
    return(
      <InfoBox mode='hint' severity='low' >
        You have no course goals yet.
      </InfoBox>
    )
  }
  let warning: ReactNode;
  if(goals.length >= 4) {
    warning = <InfoBox mode='warning' severity='high'>Too many goals.</InfoBox>
  }
  return (
    <>
    {warning}
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
  );
}
