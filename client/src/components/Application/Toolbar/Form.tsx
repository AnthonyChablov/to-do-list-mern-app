
interface Form {
  handleCreateTodo :Function
}

const Form = ({handleCreateTodo} : Form) => {

/* TODO FIX DATE-PICKER ON MOBILE */
  
  return (
    <form onSubmit={handleCreateTodo}>
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
          value="2017-06-01" 
          required
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
          value="2017-06-01" 
          required 
        />
      </div>
      <div className="pt-6 text-center">
        {/* Create TODO Button */}
        <button className="px-7 py-3 bg-red-700 text-gray-200 text-md inline-block rounded-xl hover:brightness-50 w-full">
          Add Task
        </button>
      </div>
      
    </form>
  )
}

export default Form