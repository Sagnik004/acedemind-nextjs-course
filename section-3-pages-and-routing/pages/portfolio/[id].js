import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  // router.query is an object that will hold the value of id.
  //  - router.query.id 
  // We can then use that id to maybe fetch some data from DB.

  return (
    <div>
      <h1>The Portfolio Project Page!</h1>
    </div>
  );
};

export default PortfolioProjectPage;
