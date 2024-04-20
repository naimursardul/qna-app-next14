"use client";

export default function BtnOnClick({ props }) {
  const { name, fn, val } = props;
  console.log(name, fn, val);
  return (
    <div
      className="btn bg-gray-100 text-black rounded"
      onClick={() => fn(!val)}
    >
      {name}
    </div>
  );
}
