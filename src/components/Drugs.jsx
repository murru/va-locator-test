import { Button, Stack} from '@mui/material'
const Drugs = () => {
  return (
    <Stack
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      <Button variant="contained">Hello World</Button>
      <Button variant="contained">Hello World<br/>Hello World</Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="contained">Hello World</Button>
    </Stack>
  );
}
 
export default Drugs;