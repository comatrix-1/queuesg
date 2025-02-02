import { Box, Button, Divider, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { EQueueTitles, ITicket } from "../../model";
import TicketInfo from "./TicketInfo";

interface Props {
  openLeaveModal: () => void;
  ticketId: string | undefined;
  waitingTime?: number | null;
  ticket?: ITicket;
}

export const Alerted = ({
  openLeaveModal,
  ticketId,
  waitingTime = 3,
  ticket,
}: Props) => {
  const { t, lang } = useTranslation("common");

  const queueName = ticket?.queueName?.replace(EQueueTitles.ALERTED, "").trim();

  return (
    <>
      <Box layerStyle="card" bgColor="secondary.600">
        <Text textStyle="subtitle2" color="white">
          {t("queue-position")}
        </Text>
        <Text textStyle="display3" color="white" mb="2rem">
          {t("its-your-turn")}
        </Text>
        {queueName?.length && queueName?.length > 0 && (
          <>
            <Text textStyle="subtitle2" color="white">
              {t("proceed-to")}
            </Text>
            <Text textStyle="display3" color="white" mb="2rem">
              {queueName}
            </Text>
          </>
        )}
        <Text textStyle="subtitle2" color="white">
          {t("your-queue-number-will-be-held-for")}
        </Text>
        <Text textStyle="display3" color="white">
          {waitingTime} {t("minutes")}
        </Text>

        {ticket ? (
          <>
            <Divider my="2rem" />
            <TicketInfo ticket={ticket} color="white" />
          </>
        ) : null}
      </Box>

      <Button
        bgColor="error.500"
        borderRadius="3px"
        width="100%"
        color="white"
        size="lg"
        variant="solid"
        marginTop="2rem"
        onClick={openLeaveModal}
        disabled={!ticketId}
      >
        {t("leave-the-queue")}
      </Button>
    </>
  );
};
