
const Teams = () => {
  return (
    <div className="px-4 md:px-20 flex flex-col items-center gap-6 font-montserrat my-10">
      <div className="bg-[#cdd4f1] text-main font-bold py-2 rounded-3xl w-[200px] flex justify-center items-center">Team</div>
      <h1 className="text-2xl md:text-5xl text-center font-bold">Meet our team of experts</h1>
      <p className="text-base text-center">Trust us to make tax season stress-free</p>
      <div className="w-full flex flex-col md:flex-row justify-around md:my-10">
         <div className="flex flex-col gap-4 items-center mb-10">
            <img src="https://via.placeholder.com/300x400" alt="placeholder" className="rounded-3xl"/>
            <h1 className="text-2xl font-bold">Yacob Sudarmaji</h1>
            <p className="text-[#757b8a] text-sm">Product Manager, Qnet</p>
         </div>
         <div className="flex flex-col gap-4 items-center mb-10">
            <img src="https://via.placeholder.com/300x400" alt="placeholder" className="rounded-3xl"/>
            <h1 className="text-2xl font-bold">Yacob Sudarmaji</h1>
            <p className="text-[#757b8a] text-sm">Product Manager, Qnet</p>
         </div>
         <div className="flex flex-col gap-4 items-center mb-10">
            <img src="https://via.placeholder.com/300x400" alt="placeholder" className="rounded-3xl"/>
            <h1 className="text-2xl font-bold">Yacob Sudarmaji</h1>
            <p className="text-[#757b8a] text-sm">Product Manager, Qnet</p>
         </div>
      </div>
    </div>
  )
}

export default Teams