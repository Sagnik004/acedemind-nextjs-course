import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div>
      <h1>Sorry, page not found!</h1>
      <Link href="/">Go back Home</Link>
    </div>
  );
};

export default PageNotFound;
