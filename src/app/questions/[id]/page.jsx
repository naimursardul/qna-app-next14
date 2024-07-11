import SingleQuestion from "@/components/QuestionAnswer/SingleQuestion/SingleQuestion";
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
  const ques = await getSingleQuestion(params);
  console.log(ques);

  return (
    <div>
      <div>
        <SingleQuestion ques={ques} />
      </div>
    </div>
  );
}
