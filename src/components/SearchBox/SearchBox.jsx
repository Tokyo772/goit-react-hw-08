import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";

import { changeFilter, selectName } from "../../redux/filtersSlice";

import style from "./SearchBox.module.css";

const SearchBox = () => {
  const findID = useId();

  const dispatch = useDispatch();
  const getName = useSelector(selectName);

  return (
    <div className={style.container}>
      <label htmlFor={findID}>Find contacts by name</label>
      <input
        id={findID}
        type="text"
        value={getName}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
};
export default SearchBox;
