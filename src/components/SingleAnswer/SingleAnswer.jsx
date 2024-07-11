import { FaStar } from "react-icons/fa";
import { getAllComments } from "@/lib/server_actions/action";
import Answer from "./Answer/Answer";

export default async function SingleAnswer({ props }) {
  // const { i, ans } = props;

  const i = props?.i;
  const ans = props?.ans;
  const cmnts = await getAllComments(ans?._id);

  return (
    <div className="flex flex-col ">
      {/* NUMBERING */}
      <div className="w-full flex gap-2 justify-end">
        {i + 1 === 1 && (
          <div className="w-[150px] justify-center flex items-center gap-2 bg-[--btn] p-1 text-[--text] skewBox ">
            <small>
              <FaStar />
            </small>
            <small>Best Answer</small>
          </div>
        )}
        <div className="text-2xl text-[--text] skewBox bg-[--btn] px-3 py-1">
          No. {i + 1}
        </div>
      </div>

      {/* ANSWER */}
      <div>
        <Answer props={{ ans, cmnts }} />
      </div>
    </div>
  );
}
