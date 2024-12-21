import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice.js";
import { useDispatch } from "react-redux";

export default function Contact({ contact }) {
    const { id, name, number } = contact;
    const dispatch = useDispatch();
    const deleteContactById = id => dispatch(deleteContact(id));

    return (
        <div className={css.wrapper}>

            <div className={css.contact}>
                <div className={css.line}>
                    &#128100;
                    {name}
                </div>
                <div className={css.line}>
                    &#128222;
                    {number}
                </div>
            </div>

            <button type="button" onClick={() => deleteContactById(id)}>&#128465;</button>
        </div>
    );
}
