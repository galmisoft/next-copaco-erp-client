export default class ClientService {
  static async getClients() {
    const response = await fetch(`${process.env.URL_SERVICE}/api/clientes?busqueda=peru`);
    const data = await response.json();
    console.log(data);
    return data;
  }
}