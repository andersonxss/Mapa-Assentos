import { Button, List, ListItem } from "@mui/material";
import { SeatsActions } from "action";
import styles from "../../css/seats.module.css";

const SeatsItens = (props) => {
  const { seats, sector } = props;
  const { setCheckUsersSeatsAction } = SeatsActions();

  const renderItensSeats = (dados, indexSeat) => {
    return dados.map((elemletter, indexIletter) => {
      const countButtom = indexIletter + 1;
      return (
        <span key={elemletter.number}>
          <Button
            disabled={elemletter.state}
            onClick={() =>
              setCheckUsersSeatsAction({
                sector: sector,
                seat: indexSeat,
                number: indexIletter,
                letter: elemletter.letter,
              })
            }
            variant="contained"
            size="small"
            color="primary"
            className={styles.seatsbuttonitens}
          >
            {elemletter.letter + "" + countButtom}
          </Button>

          {countButtom === 3 && (
            <Button variant="text" className={styles.seatsbuttonitensNumLiner}>
              {indexSeat + 1}
            </Button>
          )}
        </span>
      );
    });
  };

  return (
    <List>
      {seats.length > 0 &&
        seats.map((seat, indexSeat) => {
          return (
            <ListItem key={indexSeat} className={styles.seatsListItens}>
              {renderItensSeats(seat, indexSeat)}
            </ListItem>
          );
        })}
    </List>
  );
};

export default SeatsItens;
