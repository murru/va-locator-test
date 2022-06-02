import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useState } from "react"
const PainManagement = ({ selectedDrug, color, actionColor}) => {
  
  return (
    <Grid container alignItems="center" textAlign="center" style={{ border: "solid 2px black" }}>
      {/* DRUG NAME */}
      <Grid item sm={2} style={{ backgroundColor: color }}>
        { selectedDrug.generic }<br/>
        ({ selectedDrug.trade })
      </Grid>

      {/* GENE, GENOTYPE & PHENOTYPES IMPACT */}
      <Grid item sm={6}>
        <Table>
          <colgroup>
            <col width="33.333333333%"></col>
            <col width="33.333333333%"></col>
            <col width="33.333333333%"></col>
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell align="center">Gene</TableCell>
              <TableCell align="center">Genotype</TableCell>
              <TableCell align="center" style={{ backgroundColor: color }}>Phenotypes/Patient Impact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              selectedDrug.GeneInfo.map( (gi) => (
                <TableRow>
                  <TableCell align="center">
                    { gi.Gene }
                  </TableCell>
                  <TableCell align="center">
                    { gi.Genotype }
                  </TableCell>
                  <TableCell align="center" style={{ backgroundColor: color }}>
                    { gi.Phenotype }
                  </TableCell>
                </TableRow>
              ))
            }
            <TableRow>
              <TableCell align="center" colSpan={2} style={{ backgroundColor: actionColor, color: '#FFFF' }}>
                <strong>{ selectedDrug.Action }</strong>
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: actionColor, color: '#FFFF' }}>
                <strong>{ selectedDrug.GroupPhenotype }</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>

      {/* TREATMENT */}
      <Grid item sm={4}>
        { selectedDrug.Recommendation }
      </Grid>
    </Grid>
  );
}
 
export default PainManagement;