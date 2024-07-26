import Image from "next/image";
import img from "../assets/img/preview(1).jpg";
import piece_of_mind from "../assets/img/peace-of-mind.svg";
import save_time from "../assets/img/save-yourself-time.svg";
import first_to_know from "../assets/img/be-the-first-to-know.svg";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="relative py-20 font-[sans-serif]">
        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
          <h1 className="text-slate-900 text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            We monitor product changes
          </h1>
          <h1 className="text-slate-900 text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            ...so you don't have to!
          </h1>
          <p className="text-slate-900 text-lg md:text-xl mb-12">
            Stay Ahead, Save Smart: Your Price Tracking Hero!
          </p>
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* stats card */}
      <div className="bg-gray-50 px-4 py-10 font-[sans-serif] text-[#333]">
        <h2 className="text-3xl font-bold mb-14 text-center">
          Trusted by our users
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
            <h3 className="text-5xl font-extrabold">
              1.2<span className="text-blue-600">M+</span>
            </h3>
            <div>
              <p className="text-base font-bold">Total Users</p>
              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                accumsan, nunc et tempus blandit, metus mi consectetur felis
                turpis vitae ligula.
              </p>
            </div>
          </div>
          <div className="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
            <h3 className="text-5xl font-extrabold">
              $800<span className="text-blue-600">K</span>
            </h3>
            <div>
              <p className="text-base font-bold">saved for our users</p>
              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                accumsan, nunc et tempus blandit, metus mi consectetur felis
                turpis vitae ligula.
              </p>
            </div>
          </div>
          <div className="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
            <h3 className="text-5xl font-extrabold">
              150<span className="text-blue-600">K</span>
            </h3>
            <div>
              <p className="text-base font-bold">Products tracked</p>
              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                accumsan, nunc et tempus blandit, metus mi consectetur felis
                turpis vitae ligula.
              </p>
            </div>
          </div>
          <div className="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
            <h3 className="text-5xl font-extrabold">
              99.9<span className="text-blue-600">%</span>
            </h3>
            <div>
              <p className="text-base font-bold">Server Uptime</p>
              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                accumsan, nunc et tempus blandit, metus mi consectetur felis
                turpis vitae ligula.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="bg-gray-100 px-6 py-12 font-[sans-serif]">
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Image
                src={img}
                alt="Image"
                className="rounded-md object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-indigo-600 mb-4">
                Get alerts everywhere, any time
              </h2>
              <p className="text-gray-700 text-sm leading-6">
                We make it easy to use Price tracker on all your devices. So no
                matter where you're accessing the internet, you've always got
                Visualping handy.
              </p>
              <ul className="list-disc text-sm text-gray-700 space-y-2 pl-4 mt-6">
                <li>Mobile apps (Coming soon!)</li>
                <li>Browser extensions</li>
                <li>Web widget</li>
              </ul>
              <div className="mt-6">
                <a
                  href="javascript:void(0);"
                  className="text-white bg-indigo-600 hover:bg-indigo-700 p-4 rounded-xl text-sm font-semibold hover:underline"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Make the internet work for you */}
      <h2 className="text-3xl text-slate-700 font-bold mb-8 text-center pt-10">
        Make the internet work for you
      </h2>
      <p className="text-center text-slate-500 mb-10">
        Get instant alerts for every update you care about.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-2 py-5 max-w-7xl mx-auto font-[sans-serif] text-gray-600 pt-5">
        <div className="card bg-white rounded-lg shadow-md p-8">
          <center>
            <Image
              src={piece_of_mind}
              alt="Image"
              className="rounded-md object-cover w-1/2 h-1/3 m-4"
            />

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Find peace of mind
            </h3>
            <p className="text-base">Set it and forget it.</p>
            <p className="text-base">Visualping will be on top of it.</p>
          </center>
        </div>
        <div className="card bg-white rounded-lg shadow-md p-8">
          <center>
            <Image
              src={save_time}
              alt="Image"
              className="rounded-md object-cover w-1/2 h-1/3 m-4"
            />

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Save yourself time
            </h3>
            <p className="text-base">No more checking and re-checking — </p>
            <p className="text-base">go live your life. </p>
          </center>
        </div>

        <div className="card bg-white rounded-lg shadow-md p-8">
          <center>
            <Image
              src={first_to_know}
              alt="Image"
              className="rounded-md object-cover w-1/2 h-1/3 m-4"
            />

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Be the first to know{" "}
            </h3>
            <p className="text-base">
              Beat the crowd on price drops, job opportunities, event tickets
              and more.{" "}
            </p>
          </center>
        </div>
      </div>

      {/* testemonials */}
      <div className="my-6 font-[sans-serif] my-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Testimonials
          </h2>
          <p className="text-sm text-gray-800 mt-4 leading-relaxed">
            Veniam proident aute magna anim excepteur et ex consectetur velit
            ullamco veniam minim aute sit. Elit occaecat officia et laboris
            Lorem minim. Officia do aliqua adipisicing ullamco in
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl max-md:gap-16 max-md:max-w-lg mx-auto mt-20">
          <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative">
            <img
              src="https://readymadeui.com/team-2.webp"
              className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7"
            />
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-800 leading-relaxed">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt at the all time.
              </p>
            </div>

            <div className="flex justify-center space-x-1 mt-6">
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-6 text-center">
              <h4 className="text-sm whitespace-nowrap font-bold">John Doe</h4>
            </div>
          </div>

          <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative">
            <img
              src="https://readymadeui.com/team-3.webp"
              className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7"
            />
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-800 leading-relaxed">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt at the all time.
              </p>
            </div>

            <div className="flex justify-center space-x-1 mt-6">
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-6 text-center">
              <h4 className="text-sm whitespace-nowrap font-bold">
                Karolina Adair
              </h4>
            </div>
          </div>

          <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative">
            <img
              src="https://readymadeui.com/team-4.webp"
              className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7"
            />
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-800 leading-relaxed">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt at the all time.
              </p>
            </div>

            <div className="flex justify-center space-x-1 mt-6">
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-6 text-center">
              <h4 className="text-sm whitespace-nowrap font-bold">
                Simon Konecki
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <center>
        <div className="relative py-20 font-[sans-serif] border border-black w-2/3 h-1/2 rounded-3xl mb-20 bg-slate-100">
          <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
            <h1 className="text-slate-900 text-4xl md:text-5xl font-extrabold leading-tight mb-10">
              Find the plan thats right for you
            </h1>
            <p className="text-slate-900 text-lg md:text-xl mb-12">
              Start for free, or unlock higher monitoring frequencies and more
              pages with our premium plans.
            </p>
            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              See Pricing plans
            </button>
          </div>
        </div>
      </center>

      {/* Footer */}
      <footer className="bg-slate-50 pb-5 px-10 font-sans tracking-wide">
      <hr className="border-gray-300 my-12" />

      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-800">About Us</h4>
          <p className="text-gray-500 mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
            mi eu pulvinar cursus, sem elit interdum mauris.</p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-800">Services</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Web
              Development</a></li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Mobile App
              Development</a></li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">UI/UX
              Design</a></li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Digital Marketing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-800">Resources</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Webinars</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Ebooks</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Templates</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Tutorials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-800">About Us</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Our Story</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Mission and
              Values</a></li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Team</a></li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-gray-800 text-[15px]">Testimonials</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}
