import QuesForm from "@/components/QuesForm/QuesForm";

export default function AskQuestion() {
  return (
    <div className="my-10 w-[600px] max-md:w-[80%] max-sm:w-[90%] flex flex-col gap-12 mx-auto shadow-lg p-10 max-sm:p-8">
      <h1 className="text-3xl text-blue-500">Ask your question</h1>

      {/* FORM */}
      <QuesForm />
    </div>
  );
}
