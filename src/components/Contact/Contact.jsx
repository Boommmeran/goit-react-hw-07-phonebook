import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { Text, DeleteBnt, DeleteIcon } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const { deleteContact } = contactsOperations;
  const { name, phone, id } = contact;

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <Text>{name}</Text>
        <Text>{phone}</Text>
      </div>
      <DeleteBnt type="button" onClick={handleDelete}>
        <DeleteIcon />
      </DeleteBnt>
    </>
  );
};
