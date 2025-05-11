
function NavBar() {
  return (
   <div className="fixed top-4 flex items-center justify-center sm:w-full z-[50] max-sm:bg-black/90">
        <div className="w-[70%] py-6 px-3 rounded-2xl border flex items-center justify-between bg-card max-sm:hidden">
            <div>
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl "> PROBEST </h1>
            </div>

            <div>

            </div>

            <div className="flex items-center">
                <ul>
                    <li>
                        Learn
                    </li>
                </ul>
            </div>
        </div>

        <div className="sm:hidden w-[90%] py-6 px-3  flex items-center justify-between">
                <h1 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl >
                     PROBEST 
                </h1>
        </div>
    </div>
  )
}
export default NavBar