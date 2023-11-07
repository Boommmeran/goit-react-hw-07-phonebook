import { Contact } from 'components/Contact';
import { StyledList, ContactItem } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';

export const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.selectVisibleContacts);

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
