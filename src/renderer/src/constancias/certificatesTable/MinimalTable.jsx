import {
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow
} from './AllCertificates.styles'

export const MinimalTable = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
          <TableHeaderCell>Folio</TableHeaderCell>
          <TableHeaderCell>Tipo</TableHeaderCell>
            <TableHeaderCell>Dirigido1</TableHeaderCell>
            <TableHeaderCell>Matricula</TableHeaderCell>
            
            <TableHeaderCell>Elabora</TableHeaderCell>
            <TableHeaderCell>Ciudad</TableHeaderCell>
            <TableHeaderCell>Fecha Elaboración</TableHeaderCell>
            
          </TableRow>
        </TableHeader>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.Folio}</TableCell>
              <TableCell>{item.Tipo}</TableCell>
              <TableCell>{item.Dirigido1}</TableCell>
              <TableCell>{item.Matricula}</TableCell>
              
              <TableCell>{item.Elabora}</TableCell>
              <TableCell>{item.Ciudad}</TableCell>
              <TableCell>{new Date(item.Fecha_elaboracion).toLocaleDateString()}</TableCell>
              
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}
