import SingleComment from "../SingleComment/SingleComment";

export default async function AllComments({ cmnts }) {
  //   console.log(cmnts);

  if (!cmnts || !cmnts[0]) {
    return <div>No Comments!</div>;
  } else {
    return (
      <div className="flex flex-col gap-5">
        {cmnts?.map((cmnt) => (
          <SingleComment key={cmnt?.id} cmnt={cmnt} />
        ))}{" "}
      </div>
    );
  }
}
