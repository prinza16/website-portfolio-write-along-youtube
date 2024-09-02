import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from "react-icons/bs"

const HeroPage = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
        <div className="lg:w-1/3 ssm:w-fit">
            <p className="text-4xl mb-5 text-slate-300">I'm</p>
            <h1 className="text-6xl">Abdullahi Umar</h1>
            <hr />
            <p className="mt-10 text-slate-300 font-sans">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
            </p>
        </div>
        <div className="w-1/3 items-center ssm:w-fit">
            <img src="https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="" width={250} height={250} className="rounded-full w-full border-8 border-while" />
        </div>
        <div className="w-1/3 ssm:w-fit">
            <p className="text-4xl mb-4">About Me</p>
            <p className="text-slate-300">
                Let's build quality in programming ad design with our services 
            </p>
            <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white ">
                Showmore...
            </button>

            <div className="flex mt-5 space-x-4 cursor-pointer">
                <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full" />
                <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full" />
                <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full" />
                <BsPinterest size={40} className="border-4 hover:border-indigo-800 rounded-full" />
            </div>
        </div>
    </section>
  )
}

export default HeroPage