import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useState } from "react"
const PainManagement = () => {

  // Colors setup to change them dynamically.
  const [color, setColor] = useState('#FEEAA6')
  const [actionColor, setActionColor] = useState('#E1A91C')
  
  return (
    <Grid container alignItems="center" textAlign="center" style={{ border: "solid 2px black" }}>
      {/* DRUG NAME */}
      <Grid item sm={2} style={{ backgroundColor: color }}>
        Drug name
      </Grid>

      {/* GENE & GENOTYPE */}
      <Grid item sm={3}>
        <Table>
          <colgroup>
            <col width="50%"></col>
            <col width="50%"></col>
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell align="center">Gene</TableCell>
              <TableCell align="center">Genotype</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                Fake Gene 1
              </TableCell>
              <TableCell align="center">
                WT/WT
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                Fake Gene 2
              </TableCell>
              <TableCell align="center">
                WT2/WT2
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" colSpan={2} style={{ backgroundColor: actionColor, color: '#FFFF' }}>
                <strong>CAUTION</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>

      {/* PHENOTYPES & IMPACT */}
      <Grid item sm={3}>
        <Table style={{ backgroundColor: color }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Phenotypes/Patient Impact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                Normal Metabolizer
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                Porr Metabolizer
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" style={{ backgroundColor: actionColor, color: '#FFFF' }}>
                <strong>Decreased Efficacy</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>

      {/* TREATMENT */}
      <Grid item sm={4}>
        Patients with this genotype are expected to have a Poor response to Tylenol. Physicians should follow FDA label recommendations.
      </Grid>
    </Grid>
  );
}
 
export default PainManagement;