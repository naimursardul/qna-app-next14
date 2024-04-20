import { GrContact } from "react-icons/gr";

export default function Contact() {
  return (
    <div className="my-10 w-[500px] max-sm:w-[80%] rounded-lg p-8 mx-auto shadow-md">
      <h1 className="flex gap-2 items-center text-blue-500 text-3xl font-[400] mb-5">
        <GrContact />
        <span>Contact us</span>
      </h1>
      <form action="#" className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="inputField"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="inputField"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className="inputField"
        ></textarea>
        <button className="btn text-white bg-blue-600 rounded-sm">
          Submit
        </button>
      </form>
    </div>
  );
}
