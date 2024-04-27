import { type ReactNode, type FC, type PropsWithChildren } from "react";

// alternate way
/* interface CourseGoalProps {
    title: string,
    children: ReactNode
}
 */

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps): ReactNode => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};
export default CourseGoal;

// alternate way
/* export default function CourseGoal({title, children}: CourseGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button>Delete</button>
    </article>
} */
