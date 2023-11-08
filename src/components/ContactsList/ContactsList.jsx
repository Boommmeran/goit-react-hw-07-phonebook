import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { Contact } from 'components/Contact';
import { StyledList, ContactItem } from './ContactsList.styled';

export const ContactsList = () => {
  const { selectVisibleContacts } = contactsSelectors;
  const contacts = useSelector(selectVisibleContacts);

  return (
    <StyledList>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <Contact contact={contact} />
        </ContactItem>
      ))}
    </StyledList>
  );
};
