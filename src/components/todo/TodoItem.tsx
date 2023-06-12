import { BiPencil } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TodoItem() {
  return (
    <li className="flex justify-between px-3 py-1 mb-2 text-lg font-bold text-green-600 rounded-lg">
      <div>
        <label className="">
          <input type="checkbox" />
          <span className="w-full mx-4">Todo Item</span>
        </label>
      </div>
      <div>
        <button className="mr-2 " data-testid="modify-button" name="modify">
          <span className="hidden">수정</span>
          <BiPencil />
        </button>
        <button data-testid="delete-button" name="delete">
          <span className="hidden">삭제</span>
          <RiDeleteBinLine />
        </button>
      </div>
    </li>
  );
}
