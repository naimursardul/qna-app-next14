import QnaBox from "@/components/QnaBox/QnaBox";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import { getAllQuestions } from "@/lib/server_actions/action";
import Link from "next/link";

export default async function AllQuestions({ searchParams }) {
  console.log(searchParams);
  if (searchParams.sub) {
    console.log("hello");
  }
  const questions = await getAllQuestions(searchParams);
  // const questions = [
  //   {
  //     _id: new ObjectId("6649b663645b738f4be2e72e"),
  //     ques: "Hello World",
  //     imgs: ["../../../../public/aboutme.jpg"],
  //     sub: "Physics 1st",
  //     chap: "2nd",
  //     // createdAt: 2024-05-19T08:21:16.702Z,
  //     // updatedAt: 2024-07-10T11:47:34.924Z,
  //     // __v: 0
  //   },
  // ];

  return (
    <div className="mx-20 max-sm:mx-10 my-10 flex flex-col gap-10">
      <h2 className=" text-3xl text-[--btnSoft]">All Questions</h2>

      {/* Form */}
      <SearchFilter />

      {/* QusBox */}
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {questions?.map((ques) => (
          <Link key={ques?._id} href={`/questions/${ques?.id}`}>
            {" "}
            <QnaBox ques={ques} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}
