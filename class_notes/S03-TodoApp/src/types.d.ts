interface ITodo {
  task: string;
  isDone: boolean;
  id: string; //* id değeri string ya da number olabilir.
  owner?: string; //! bu alan zorunlu değil, optional. Eğer varsa da type'ı string.
}

type AddFn = (task: string) => Promise<void>;
type ToggleFn = (todo: ITodo) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;
