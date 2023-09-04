import { MouseEvent } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import ClientService from './services/clientService';

function preventDefault(event: MouseEvent) {
  event.preventDefault();
}

export default async function Clients() {
  const clients = await ClientService.getClients();
  console.log(clients);
  return (
    <>
      <Title>Clientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Descripcion</TableCell>
            <TableCell>RUC</TableCell>
            <TableCell>Dirección Legal</TableCell>
            <TableCell>Ubigeo</TableCell>
            <TableCell align="right">Distrito</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client: any) => (
            <TableRow key={client.id_aux}>
              <TableCell>{client.des_aux}</TableCell>
              <TableCell>{client.ruc_aux}</TableCell>
              <TableCell>{client.dir_legal}</TableCell>
              <TableCell>{client.ubigeo}</TableCell>
              <TableCell align="right">{`${client.distrito}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </>
  );
}