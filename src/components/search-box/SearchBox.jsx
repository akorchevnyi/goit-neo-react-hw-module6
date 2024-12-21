import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice.js";

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilter = text => dispatch(changeFilter(text));

    return <div className={css.wrapper}>
        <label>
            Find contacts by name
            <input className={css.search} type="text" value={filter} onChange={e => handleFilter(e.target.value)}/>
        </label>
    </div>;
}
