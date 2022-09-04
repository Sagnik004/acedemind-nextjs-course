import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    { id: 'max33', name: 'Maximilian' },
    { id: 'george101', name: 'George' },
    { id: 'sandeep9', name: 'Sandeep' },
  ];

  return (
    <div>
      <h1>The Clients Page!</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
              <Link
                href={{
                  pathname: '/clients/[clientid]',
                  query: {
                    clientid: client.id,
                  },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientsPage;
