import { memo, VFC } from "react";
import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";


type Props = {
  isOpen: boolean
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const {isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
    <ModalOverlay />
    <ModalContent pb={6}>
      <ModalHeader>ユーザー詳細</ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input value="名前です" isReadOnly/>
          </FormControl>
          <FormControl>
            <FormLabel>フルネーム</FormLabel>
            <Input value="フルネームです" isReadOnly/>
          </FormControl>
          <FormControl>
            <FormLabel>MAIL</FormLabel>
            <Input value="test@exmaple.com" isReadOnly/>
          </FormControl>
          <FormControl>
            <FormLabel>TEL</FormLabel>
            <Input value="090-1234-1234" isReadOnly/>
          </FormControl>
        </Stack>
      </ModalBody>
    </ModalContent>
  </Modal>
  );
});