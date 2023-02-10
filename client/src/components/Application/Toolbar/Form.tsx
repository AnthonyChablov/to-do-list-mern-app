import { shallow } from 'zustand/shallow';
import { useTodoStore } from "../../../store/todoStore";
import { useTodosStore } from '../../../store/todosStore';
import { useModalStore } from '../../../store/modalStore';
import { createTodo } from '../../../api/Todo/createTodo';
import { updateTodo } from '../../../api/Todo/updateTodo';
import SubmitButton from './SubmitButton';

interface IForm{
  mode : String,

}

const Form = ({mode}:IForm) => {
  
  /* Retrieve Todos Store State from Zustand */
  const addTodo = useTodosStore(state => state.addTodo);
  /* Retrieve Todo Store State from Zustand */
  const { 
    title,  
    description, 
    startDate,
    dueDate,
    setTitle,
    setDescription,
    setStartDate,
    setDueDate
  } = useTodoStore(
    (state) => ({ 
      title: state.title, 
      description: state.description ,
      dueDate: state.dueDate,
      startDate: state.startDate,
      setTitle: state.setTitle ,
      setDescription: state.setDescription ,
      setStartDate: state.setStartDate ,
      setDueDate : state.setDueDate,
    }),
    shallow
  );

  /* Retrieve Modal Store State from Zustand */
  const open = useModalStore(state => state.open);
  const handleModalOpen = useModalStore(state => state.handleModalOpen);

  /* Form Submit */
  async function handleCreateTodo(e: React.FormEvent){
    e.preventDefault(); 
    const newTodo = await createTodo(title, description, startDate, dueDate); 
    /* Persist To DB */
    addTodo( newTodo );
    /* Reset Values on Submit */
    setTitle('');
    setDescription('');
    setStartDate(new Date);
    setDueDate(new Date);
    handleModalOpen(!open);
  } 

  async function handleUpdateTodo(e: React.FormEvent){
    e.preventDefault(); 
    await updateTodo(id, title, description, startDate, dueDate);
    handleModalOpen(!open);
  }

  return (
    <form onSubmit={
      mode === 'Update'
        ? handleUpdateTodo 
        : handleCreateTodo 
    }>
      <div className=""> {/* flex container */}
        {/* title input */}
        <label className=" pt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
          htmlFor="grid-title">
          Title 
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
        border-gray-300 shadow-sm rounded py-3 px-4 mb-3 
        leading-tight focus:outline-none focus:bg-white" 
          id="grid-title" 
          type="text" 
          placeholder="Enter Title"
          required  
          value={ title }
          onChange={( e:  React.ChangeEvent<HTMLInputElement>)=> {
            setTitle(e.target.value);
          }}
        >
        </input>
        {/* description input */}
        <label className="pt-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
          htmlFor="grid-description"
        >
          description
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
        border-gray-300 shadow-sm rounded py-3 px-4 mb-3 
        leading-tight focus:outline-none focus:bg-white" 
          id="grid-description" 
          type="text" 
          placeholder="Enter Description"
          required
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
            setDescription(e.target.value);
          }}
        >
        </input>
      </div>

      <div className=""> {/* flex container */}
        {/* start-date input */}
        <label className="pt-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
          htmlFor="grid-start-date"
        >
          Start Date
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
        border-gray-300 shadow-sm rounded py-3 px-4 mb-3 leading-tight 
        focus:outline-none focus:bg-white" 
          type="date" 
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
            const startDay = new Date(e.target.value);
            setStartDate( startDay );
          }}
        />

        {/* end-date input */}
        <label className="pt-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
          htmlFor="grid-end-date"
        >
          End Date
        </label>
        <input className="appearance-none block w-full 
        bg-gray-200 text-gray-700 border border-gray-300 
        shadow-sm rounded py-3 px-4 mb-3 leading-tight 
        focus:outline-none focus:bg-white" 
          type="date" 
          required 
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
            const dueDay = new Date(e.target.value);
            setDueDate( dueDay );
          }}
        />
      </div>
      <div className="pt-6 text-center">
        <SubmitButton name={mode}/>
      </div>
      
    </form>
  )
}

export default Form