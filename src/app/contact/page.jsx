import { GrContact } from "react-icons/gr";

export default function Contact() {
  return (
    <div className="my-10 w-[500px] max-sm:w-[80%] rounded-lg p-8 mx-auto bg-[--bgSoft] ">
      {/* <div className="my-10 w-[500px] max-sm:w-[80%] rounded-lg p-8 mx-auto shadowColor "> */}
      <h1 className="flex gap-2 items-center text-[--btnSoft] text-3xl font-[400] mb-5">
        <GrContact />
        <span>Contact us</span>
      </h1>
      <form action="#" className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="inputField bg-[--bgSofter] text-[--text]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="inputField bg-[--bgSofter] text-[--text]"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className="inputField bg-[--bgSofter] text-[--text]"
        ></textarea>
        <button className="btn text-[--text] bg-[--btn] hover:bg-[--btnSoft] rounded-sm">
          Submit
        </button>
      </form>
    </div>
  );
}
