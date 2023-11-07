import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsForm } from 'components/ContactsForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error'
import { contactsSelectors } from 'redux/contacts';
import { contactsOperations } from 'redux/contacts';
import { Container, MainTitle, Title } from './App.syled';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainTitle>Phone book</MainTitle>
      <ContactsForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length !== 0 && <ContactsList />}
      {error && <Error text={'Something went wrong, please reload this page'} />}
      {isLoading && <Loader />}
    </Container>
  );
}
