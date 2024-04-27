import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = { 
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals!</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <ul>
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </ul>
    </main>
  );
}
