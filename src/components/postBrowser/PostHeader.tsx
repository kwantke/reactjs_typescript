import { LayoutGrid, Search } from "lucide-react";
import { usePostStore } from "./store/postStore";
import { useEffect, useState } from "react";

export default function PostHeader() {
  const setLimit = usePostStore((state) => state.setLimit);
  const setCurrentPages = usePostStore((state) => state.setCurrentPages);
  const setTerm = usePostStore((state) => state.setTerm);

  const [input, setInput] = useState("");
  // 디바운스를 활용하여 검색(타이핑할때마다 조회가 이루어지는 것이 아닌 일정 시간의 텀을 두고
  // 그 시간동안 타이핑이 없으면 검색을 진행)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPages(1);
      setTerm(input);
    }, 1000);
    // 타이핑 시간이 1초를 넘으면 시간은 다시 리셋
    return () => clearTimeout(timer);
  }, [input, setTerm, setCurrentPages]);
  return (
    <div className="mb-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          <span className="inline-flex items-center gap-2">
            <LayoutGrid className="h-6 w-6 text-indigo-600" />
            <span>Posts Browser</span>
          </span>
        </h1>

        <div className="flex items-center gap-2">
          <label
            htmlFor="pageSize"
            className="text-sm font-medium text-gray-700"
          >
            Show:
          </label>
          <select
            id="pageSize"
            className="block w-20 rounded-md border-gray-300 py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            onChange={(e) => {
              setCurrentPages(1);
              setLimit(Number(e.target.value));
            }}
            defaultValue={10}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <div className="relative rounded-md shadow-sm  w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 w-full">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          placeholder="Search posts by title..."
          className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}
