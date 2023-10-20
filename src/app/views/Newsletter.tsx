import { Input } from "../../../@/ui/input"






const Newsletter = () => {
    return (
        <section>
<div className='text-center flex flex-col items-center gap-y-4 mb-48 justify-center '>
                        <h1 className='text-4xl  font-bold text-slate-800'>Subscribe Our Newsletter</h1>

                        <div className='relative mr-[650px] gap-0 text-center top-0'>
                        <h2 className='md:text-9xl text-8xl pl-20 md:pl-0 text-slate-100 font-bold -z-10 absolute'>Newsletter</h2>
                        </div>

                        <p className='text-slate-800'>Get the latest information and promo offers directly</p>
                        <div className='flex justify-center-center'>
                            <Input className="text-slate-400 w-72 " type="text" placeholder="Input Email address" />
                            <button className="hover:scale-105 hover:duration-300 flex animate-pulse bg-gray-800 px-4 gap-x-3 font-semibold  shadow-inner  py-2 ml-2 text-white">Get Started</button>
                        </div>
                        
                    </div>



</section>
)
}

export default Newsletter