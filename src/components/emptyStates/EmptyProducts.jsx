import { LiaFolderOpenSolid } from "react-icons/lia";
export default function EmptyProducts() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-6 py-10">
      <LiaFolderOpenSolid className="text-8xl text-gray-200" />
      <p className="text-sm">
        We could not find any product matching your search. Try using a
        different search term
      </p>
    </div>
  );
}
