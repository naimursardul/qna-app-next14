import CreateComment from "../CreateComment/CreateComment";
import AllComments from "../AllComments/AllComments";

export default function Comments({ props }) {
  const { ans, cmnts } = props;

  return (
    <div>
      {/* ALL Comment */}
      <div className="mt-5 flex flex-col gap-11">
        <AllComments cmnts={cmnts} />

        {/* CREATE COMMENT */}
        <div className="mx-4 flex flex-col gap-1">
          <h3 className="text-xl max-md:text-lg">Add your comment here:</h3>
          <CreateComment ans={ans} />
        </div>
      </div>
    </div>
  );
}
