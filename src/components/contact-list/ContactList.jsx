import css from "./ContactList.module.css";
import Contact from "../contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));


    return <ul className={css.contactList}>
        {visibleContacts.map(item => <li key={item.id}><Contact contact={item}/></li>)}
    </ul>;
}
