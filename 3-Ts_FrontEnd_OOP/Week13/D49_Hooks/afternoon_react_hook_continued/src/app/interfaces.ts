interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: ITask[];
}
