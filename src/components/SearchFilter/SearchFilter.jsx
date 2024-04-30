import { getAllQuestions } from "@/lib/data";
import { chaps, subs } from "@/lib/utilities";
import { redirect } from "next/navigation";

const getData = async (FormData) => {
  "use server";
  let queryStr;
  try {
    let { sub, chap, search } = Object.fromEntries(FormData);
    const arr = [];

    sub && arr.push(`sub=${sub}`);
    chap && arr.push(`chap=${chap}`);
    search && arr.push(`search=${search}`);

    queryStr = arr && arr.join("&");
  } catch (err) {
    console.log(err);
  }
  redirect(`/questions?${queryStr}`);
};

export default async function SearchFilter() {
  return (
    <form
      action={getData}
      className=" flex max-md:flex-col flex-row gap-5 max-sm:gap-5 justify-center items-center"
    >
      <input
        type="search"
        name="search"
        placeholder="Search your question..."
        className="max-sm:w-[100%] w-[400px] bg-[--bgSofter] max-sm:text-sm text-[--text] border-none outline-none rounded py-[10px] px-3 "
      />
      <div className="flex gap-5 max-sm:gap-2 text-sm max-sm:text-[11px]">
        <select
          name="sub"
          className="bg-[--bgSofter] text-[--text] px-1 rounded-md outline-none"
        >
          <option value={``}>All Subjects</option>
          {subs?.map((sub, i) => (
            <option key={i} value={sub}>
              {sub}
            </option>
          ))}
        </select>
        <select
          name="chap"
          id=""
          className="bg-[--bgSofter] text-[--text] px-1 rounded-md outline-none"
        >
          <option value={``}>All Chapters</option>
          {chaps?.map((chap, i) => (
            <option key={i} value={chap}>
              {`Chap: ${chap}`}
            </option>
          ))}
        </select>
        <div className="w-full">
          <button className="btn bg-[--btn]  text-[--bg] hover:text-[--bgSoft] rounded ">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
