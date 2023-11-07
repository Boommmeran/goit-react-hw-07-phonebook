import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import * as yup from 'yup';
import {
  StyledForm,
  Label,
  Input,
  Button,
  StyledErrorMessage,
} from './ContactsForm.styled';

const schema = yup.object().shape({
  name: yup.string().required('It is required field'),
  phone: yup
    .string()
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
      'Phone number must contain only numbers'
    )
    .required('It is required field'),
});

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.selectContacts);

  const handleSubmitForm = ({ name, phone }, { resetForm }) => {
    const sameName = contacts.find(contact => contact.name === name);

    if (sameName) {
      return Notiflix.Notify.failure(
        'This contact is already in your phone book'
      );
    }

    dispatch(contactsOperations.addContact({ name, phone }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={handleSubmitForm}
      validationSchema={schema}
    >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorMessage name="name">
            {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </Label>

        <Label>
          Number
          <Input type="text" name="phone" placeholder="Example: 0997755446" />
          <ErrorMessage name="phone">
            {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};