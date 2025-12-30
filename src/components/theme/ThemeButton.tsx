import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/features/theme/themeSlice";

export default function ThemeButton() {
  console.log("themeButton");
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(changeTheme())}>테마변경</button>
    </>
  );
}
