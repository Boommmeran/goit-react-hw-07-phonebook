import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { Text, DeleteBnt, DeleteIcon } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(contactsOperations.deleteContact(contact.id));

  return (
    <>
      <div>
        <Text>{contact.name}</Text>
        <Text>{contact.phone}</Text>
      </div>
      <DeleteBnt type="button" onClick={handleDelete}>
        <DeleteIcon />
      </DeleteBnt>
    </>
  );
};
