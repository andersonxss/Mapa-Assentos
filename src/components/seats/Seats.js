import { Box } from "@mui/material";
import { SeatsItens, TitleClass } from "components";
import { SeatsHooks } from "hooks";
const Seats = () => {
  const { listSeats } = SeatsHooks();

  return (
    <Box>
      {listSeats.length > 0 &&
        listSeats.map((sector, sectorIndex) => {
          return (
            <Box key={sectorIndex}>
              <TitleClass title={sector.name} />
              <SeatsItens seats={sector.seats} sector={sectorIndex} />
            </Box>
          );
        })}
    </Box>
  );
};

export default Seats;
