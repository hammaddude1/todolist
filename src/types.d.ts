type list = {
  title: string;
  isFinished: boolean;
};

type toggleTodo = (isSelected: list) => void;
type addItem = (newTodo: string) => void;
