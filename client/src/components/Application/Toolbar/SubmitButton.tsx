interface ISubmitButton{
    name : String
}

const SubmitButton = ({name}:ISubmitButton) => {
  return (
    <button className="px-7 py-3 bg-red-700 text-gray-200 text-md inline-block rounded-xl hover:brightness-50 w-full">
        {`${name} Task`}
    </button>
  )
}

export default SubmitButton