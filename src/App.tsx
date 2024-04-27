import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn react plus typescript",
        description: "Learn it in depth",
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
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </ul>
    </main>
  );
}
