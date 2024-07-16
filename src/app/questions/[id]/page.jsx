import AllAnswer from "@/components/QuestionAnswer/AllAnswers/AllAnswer";
import SingleQuestion from "@/components/QuestionAnswer/SingleQuestion/SingleQuestion";
import { getAllAnswers } from "@/lib/server_actions/answer_action";
import { getSingleQuestion } from "@/lib/server_actions/question_action";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const ques = await getSingleQuestion(params);
  return {
    title: `${ques?.sub} Chapter ${ques?.chap}`,
    description: ques?.ques,
  };
};

export default async function page({ params }) {
  console.log(params);
  const ques = await getSingleQuestion(params);
  console.log(ques);

  const answers = await getAllAnswers(params);
  console.log(answers);

  // const ans = [
  //   {
  //     _id: new ObjectId("6649b67cfc3776f226ba614e"),
  //     ans: "Answers",
  //     imgs: ["../../../../public/aboutme.jpg"],
  //     star: 1,
  //     userId: "85y23458484237",
  //     qId: "6649b663645b738f4be2e72e",
  //     // createdAt: 2024-05-19T08:21:16.702Z,
  //     // updatedAt: 2024-07-10T11:47:34.924Z,
  //     // __v: 0
  //   },
  // ];

  // const ques = {
  //   _id: new ObjectId("6649b663645b738f4be2e72e"),
  //   ques: "Hello World",
  //   imgs: ["../../../../public/aboutme.jpg"],
  //   sub: "Physics 1st",
  //   chap: "2nd",
  //   // createdAt: 2024-05-19T08:21:16.702Z,
  //   // updatedAt: 2024-07-10T11:47:34.924Z,
  //   // __v: 0
  // };

  return (
    <div className="py-14">
      <div className="globPadX">
        <h2 className="w-full text-center text-4xl font-bold text-[--btnSoft] mb-6">
          Question
        </h2>
        <SingleQuestion ques={ques} />
      </div>
      <div className="globPadX pt-20">
        <h2 className="w-full text-center text-4xl font-bold text-[--btnSoft] mb-12">
          All Answers
        </h2>
        <div className="flex flex-col gap-12 text-sm">
          {answers?.length &&
            answers.map((ans, i) => (
              <AllAnswer key={i} props={{ ques, ans, i }} />
            ))}
        </div>
      </div>
    </div>
  );
}
