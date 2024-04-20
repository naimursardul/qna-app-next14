import { addComment } from "@/lib/data";

export default function CreateComment({ ans }) {
  return (
    <form action={addComment} className="mt-2 flex gap-2">
      <textarea
        name="cmnt"
        rows="1"
        placeholder="Type here..."
        className="w-full outline-none border-b pt-2 pb-1"
      ></textarea>
      <input type="hidden" name="userId" value={"742678738"} />
      <input type="hidden" name="qId" value={ans?.qId} />
      <input type="hidden" name="ansId" value={ans?._id} />{" "}
      <button className="px-4 py-1 bg-blue-600 rounded text-white">Add</button>
    </form>
  );
}
