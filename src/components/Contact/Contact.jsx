import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <li className={css.contact}>
      <div>
        <p className={css.info}>
          <IoPersonSharp className={css.icon} size="18" /> {contact.name}
        </p>
        <p className={css.info}>
          <BsFillTelephoneFill className={css.icon} size="18" />{" "}
          {contact.number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(contact))}>Delete</button>
    </li>
  );
}
