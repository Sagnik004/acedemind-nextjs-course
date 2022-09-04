import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);

  const handleBtnClick = () => {
    // router.push('/clients/max33/projA'); // router.replace() can be used as well
    router.push({
      pathname: '/clients/[clientid]/[clientprojectid]',
      query: {
        clientid: 'max33',
        clientprojectid: 'projA',
      },
    });
  };

  return (
    <div>
      <h1>All the Projects for a given Client!</h1>
      <button onClick={handleBtnClick} style={{ cursor: 'pointer' }}>
        Load project A
      </button>
    </div>
  );
};

export default ClientProjectsPage;
