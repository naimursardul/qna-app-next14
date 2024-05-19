import SingleAnswer from "@/components/SingleAnswer/SingleAnswer";
import QuestionSection from "@/components/singleQuestion/QuestionSection";
import SubmitSolve from "@/components/singleQuestion/SubmitAnswer";
import { getAllAnswers, getSingleQuestion } from "@/lib/action";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
  const ques = await getSingleQuestion(params);
  return {
    title: `${ques?.sub} Chapter ${ques?.chap}`,
    description: ques?.ques,
  };
};

export default async function page({ params }) {
  // const ques = await getSingleQuestion(params);
  // const answers = await getAllAnswers();

  const quesData = getSingleQuestion(params);
  const ansData = getAllAnswers(params);

  // console.log(params);
  const [ques, answers] = await Promise.all([quesData, ansData]);

  return (
    <div className="w-[70%] max-md:w-[75%] max-sm:w-[85%] mx-auto my-16 flex flex-col gap-16">
      {/* Links */}
      <div className="flex justify-center gap-2 w-full">
        <Link
          className="btn bg-[--bgSoft] text-[--text] hover:text-[--textSoft] rounded-lg   "
          href={`#allAns`}
        >
          All Answers
        </Link>
        <Link
          className="btn bg-[--bgSoft] text-[--text] hover:text-[--textSoft] rounded-lg "
          href={`#subAns`}
        >
          Submit Answer
        </Link>
      </div>
      {/* Question Section */}
      <div>
        <QuestionSection ques={ques} />
      </div>

      {/* All Answers  */}
      <div className="flex flex-col gap-16" id="allAns">
        <h2 className="text-3xl text-blue-500 font-semibold">All Answers</h2>
        {answers && answers[0] ? (
          answers.map((ans, i) => <SingleAnswer key={i} props={{ ans, i }} />)
        ) : (
          <small className="text-[--textSoft] ml-5">
            No Answer Submitted yet
          </small>
        )}
      </div>

      {/* Submit Answer */}
      <div id="subAns">
        <SubmitSolve params={params} />
      </div>
    </div>
  );
}
