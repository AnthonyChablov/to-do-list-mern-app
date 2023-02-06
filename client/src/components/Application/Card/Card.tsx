export interface Todo{
  title: String,
  description: String,
  startDate: Date,
  dueDate: Date,
  isDone:Boolean,
}



const Card = ({title, description,startDate,dueDate,isDone}:Todo) => {

  const startDay = new Date(startDate);
  const dueDay = new Date(dueDate);

  return (
    <div className="w-11/12 rounded-xl mb-5 mt-2 border-solid border-2 overflow-hidden">
      <div className="p-2 bg-gray-300 flex justify-between">
        <p>{title}</p>
        <button className=" mr-3 hover:bg-slate-300 hover:rounded-xl">X</button>
      </div>
      <div className="p-2 h-fit ">
        <div className="text-sm underline pb-3">
          {startDay.toDateString()} 
          <span> - </span> 
          {dueDay.toDateString()}
        </div>
        <p className="pb-3 text-sm"> {description}</p>
      </div>
      
    </div>
  )
}

export default Card