import "./App.css";
import ContactList from "./contact-list/ContactList.jsx";
import SearchBox from "./search-box/SearchBox.jsx";
import ContactForm from "./contact-form/ContactForm.jsx";


function App() {

    return (
        <>
            <div className="container">
                <h1 className="header">Phonebook</h1>
                <ContactForm/>
                <SearchBox/>
                <ContactList/>
            </div>
        </>
    );
}

export default App;
