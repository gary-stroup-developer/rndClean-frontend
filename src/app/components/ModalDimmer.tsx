import {
    ModalHeader,
    ModalContent,
    ModalActions,
    Button,
    Modal,
} from 'semantic-ui-react'
import { useAppDispatch } from '../../store/store';
import { closeModal } from '../../features/modal';

const ModalDimmer = ({username, password, open, dimmer}:ModalProps) => {
    const dispatch = useAppDispatch();

  return (

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch(closeModal())}
      >
        <ModalHeader>The Form Data you entered is:</ModalHeader>
        <ModalContent>
              <p>Username: <span>{username}</span></p>
              <p>Password: <span>{password}</span></p>
        </ModalContent>
        <ModalActions>
          <Button negative onClick={() => dispatch(closeModal())}>
            Disagree
          </Button>
          <Button positive onClick={() => dispatch(closeModal())}>
            Agree
          </Button>
        </ModalActions>
      </Modal>
  )
}

export default ModalDimmer