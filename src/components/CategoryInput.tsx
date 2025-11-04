import type { CATEGORY_TYPE, OPTION_TYPE } from "../types";

const options: OPTION_TYPE[] = [
  { value: "bollywood", label: "Bollywood " },
  { value: "cricket", label: "Cricket" },
  { value: "current_affairs", label: "Current Affairs" },
  { value: "famous", label: "Famous Personalities" },
  { value: "geography", label: "Indian Geography" },
  { value: "history", label: "Indian History" },
  { value: "mythology", label: "Indian Mythology & Epics" },
  { value: "politics", label: "Indian Politics" },
  { value: "kids", label: "Kids Zone" },
  { value: "science", label: "Science & Technology" },
];

type PROPS_TYPE = {
  category: CATEGORY_TYPE;
  setCategory: (value: CATEGORY_TYPE) => void;
};

const CategoryInput = ({ category, setCategory }: PROPS_TYPE) => {
  //   const [category, setCategory] = useState<CATEGORY_TYPE>("bollywood");

  return (
    <select
      value={category!}
      onChange={(e) => setCategory(e.target.value as CATEGORY_TYPE)}
      className="p-2 bg-primary rounded-full font-bold w-full md:w-70"
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value!}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default CategoryInput;
