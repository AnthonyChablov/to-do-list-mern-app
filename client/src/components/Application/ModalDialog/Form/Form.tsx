import { shallow } from 'zustand/shallow';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useTodoStore } from "../../../../store/Todo/todoStore";
import { useTodosStore } from '../../../../store/Todo/todosStore';
import { useModalStore } from '../../../../store/Modal/modalStore';
import { useCardStore } from '../../../../store/Card/cardStore';
import { createTodo } from '../../../../api/Todo/createTodo';
import { updateTodo } from '../../../../api/Todo/updateTodo';
import SubmitButton from '../../../Common/Buttons/SubmitButton';

interface IForm{
  mode : String,
};

const Form = ({mode}:IForm) => {

    /* State */
    const addTodo = useTodosStore(state => state.addTodo);
    const updateTodoUI = useTodosStore(state => state.updateTodoUI );
    const open = useModalStore(state => state.open);
    const handleModalOpen = useModalStore(state => state.handleModalOpen);
    const cardId = useCardStore(state => state.cardId);
    const { title, description, startDate, dueDate, setTitle, setDescription, setStartDate, setDueDate} = useTodoStore(
      (state) => ({ 
        title: state.title, 
        description: state.description ,
        dueDate: state.dueDate,
        startDate: state.startDate,
        setTitle: state.setTitle ,
        setDescription: state.setDescription ,
        setStartDate: state.setStartDate ,
        setDueDate : state.setDueDate,
      }), shallow
    );
    
    async function handleCreateTodo(e: React.FormEvent){
      e.preventDefault(); 
      const newTodo = await createTodo(title, description, startDate, dueDate); /* Create new task */
      addTodo( newTodo ); /* Persist To DB */
      /* Reset Values on Submit */
      setTitle('');
      setDescription('');
      setStartDate(null);
      setDueDate(null);
      handleModalOpen(!open);
    }

    async function handleUpdateTodo(e: React.FormEvent){
      e.preventDefault(); 
      await updateTodo(cardId, title, description, startDate, dueDate); // send PUT req to API to update
      updateTodoUI(cardId, title, description, startDate, dueDate);     // optimistic update of UI
      handleModalOpen(!open);
    }

    return (
      <form 
        onSubmit = {
        mode === 'Update'
          ? handleUpdateTodo 
          : handleCreateTodo 
      }>
      {/* title */}
        <TextField 
          autoComplete='off'
          name='Title' 
          variant='standard' 
          label='Title' 
          fullWidth 
          value={title} 
          required 
          onChange={( e: React.ChangeEvent<HTMLInputElement>)=> {
              setTitle(e.target.value);
          }}>
        </TextField>
      {/* desc */}
        <TextField 
          autoComplete='off'
          name='Description' 
          variant='standard' 
          label='Description' 
          fullWidth 
          value={description} 
          margin="normal"
          required 
          onChange={( e:  React.ChangeEvent<HTMLInputElement>)=> {
              setDescription(e.target.value);
          }}>
        </TextField>
      {/* dates */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className=" flex flex-col">
          {/* startDate */}
            <DesktopDatePicker
              label="Start Date"
              inputFormat="MM/DD/YYYY"
              value={startDate}
              onChange={(newValue: Dayjs | null)=> {
                setStartDate( newValue );
              }}
              renderInput={
                (params) => 
                  <TextField 
                    autoComplete='off'
                    fullWidth 
                    variant='standard'  
                    margin="normal"
                    value={startDate} 
                    required
                    {...params} 
                  />
              }
            />
          {/* dueDate */}
            <DesktopDatePicker
              label="Due Date"
              inputFormat="MM/DD/YYYY"
              value={dueDate}
              onChange={(newValue: Dayjs | null)=> {
                setDueDate( newValue );
              }}
              renderInput={
                (params) => 
                  <TextField 
                    autoComplete='off'
                    fullWidth 
                    variant='standard'  
                    margin="normal"
                    value={dueDate} 
                    required
                    {...params} 
                  />
              }
            />
          </div>
        </LocalizationProvider>
      {/* Submit Button */}
        <div className="pt-10 text-center">
          <SubmitButton name={`${mode} Task`}/>
        </div>
      </form>
    );
};

export default Form;