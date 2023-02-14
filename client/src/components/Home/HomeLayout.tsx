import Button from "./Button/Button"

const HomeLayout = () => {
  return (
    <section className="relative bg-heroImage bg-cover bg-center bg-no-repeat flex flex-col items-center h-screen ">
      {/* bg gradient */}
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/90 sm:to-white/80">
      </div>
      <div className="relative mx-auto font-Roboto pt-[25vh]">
        <div className="w-10/12 max-w-3xl mx-auto text-gray-900">
          <h1 className="text-3xl sm:text-4xl text-center font-bold">Manage Your Tasks, Quick and Easy</h1>
          <p className="pt-8 text-center text-xl sm:text-2xl ">
            Easily manage and keep track of your tasks and to-dos. 
            Stay organized and achieve your goals with ease.
          </p>
        </div>
        <div className="pt-10 text-center">
          <Button text={'Get Started'}/>
        </div>
      </div>
    </section>
  )
}


/* 
  (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to My To-Do App</h1>
      <p className="text-xl text-gray-600 mt-4">Stay organized and achieve your goals with ease</p>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-6">
        Get Started
      </button>
    </div>
  )

*/

export default HomeLayout