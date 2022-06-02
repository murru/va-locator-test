import { Button, Stack} from '@mui/material'
const Drugs = ({ drugs, handler }) => {
  return (
    <Stack
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      {
        drugs.map((d) => (
          <Button key={ d.id } variant="contained" onClick={ () => handler(d.id) }>{ d.generic }<br/>({ d.trade })</Button>
        ))
      }
    </Stack>
  );
}
 
export default Drugs;