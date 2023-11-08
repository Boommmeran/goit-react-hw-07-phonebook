import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { contactsOperations } from 'redux/contacts';
import { ContactsForm } from 'components/ContactsForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';
import { Container, MainTitle, Title } from './App.styled';

export function App() {
  const dispatch = useDispatch();

  const { selectContacts, selectIsLoading, selectError } = contactsSelectors;
  const { fetchContacts } = contactsOperations;

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, fetchContacts]);

  return (
    <Container>
      <MainTitle>Phone book</MainTitle>
      <ContactsForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length !== 0 && <ContactsList />}
      {error && (
        <Error text={'Something went wrong, please reload this page'} />
      )}
      {isLoading && <Loader />}
    </Container>
  );
}
