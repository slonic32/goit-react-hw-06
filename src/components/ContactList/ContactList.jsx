import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

function filterContacts(contacts, filter) {
  const filteredContacts = [];
  contacts.map((contact) => {
    if (contact.name.toUpperCase().includes(filter.toUpperCase())) {
      filteredContacts.push(contact);
    }
  });
  return filteredContacts;
}

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  return (
    <ul className={css.contactList}>
      {filterContacts(contacts, filter).map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
