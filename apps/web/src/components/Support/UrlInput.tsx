import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  ButtonGroup,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

type Props = {
  url: string;
};

export const UrlInput = ({ url = "" }: Props) => {
  const openNewTab = () => {
    window.open(url);
  };

  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type="text" value={url} onChange={() => {}} />
      <InputRightElement width="4.5rem">
        <ButtonGroup size="sm" variant="outline">
          {/*
        <IconButton
          h="1.75em"
          variant="outline"
          colorScheme="teal"
          aria-label="Copy"
          icon={<CopyIcon />}
        />
        */}
          <IconButton
            h="1.75em"
            variant="outline"
            colorScheme="black"
            aria-label="Open New Tab"
            icon={<ExternalLinkIcon />}
            onClick={openNewTab}
          />
        </ButtonGroup>
      </InputRightElement>
    </InputGroup>
  );
};
