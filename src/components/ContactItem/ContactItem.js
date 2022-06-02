import React from 'react';
import s from './ContactItem.module.css';
import { useDeleteContactMutation } from '../../redux/slice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function ContactItem({ contact }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  console.log(contact);
  return (
    <div className={s.item}>
      <p className={s.contact}>
        {contact.name}: {contact.number}
      </p>

      <IconButton
        className={s.deleteContact}
        aria-label="delete"
        onClick={() => {
          deleteContact(contact.id);
          toast.error(`Contact ${contact.name} deleting`);
        }}
        disabled={isDeleting}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default ContactItem;
