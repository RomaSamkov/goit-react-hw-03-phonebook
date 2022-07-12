import PropTypes from 'prop-types';
import { ListContacts, Item, Contact, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListContacts>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact>
            {name}........ {number}
          </Contact>
          <Button type="submit" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </ListContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
