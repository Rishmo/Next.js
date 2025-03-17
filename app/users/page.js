import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Link href="/users/1">
        <h1>User 1</h1>
      </Link>
      <Link href="/users/2">
        <h1>User 2</h1>
      </Link>
      <Link href="/users/3">
        <h1>User 3</h1>
      </Link>
      <Link href="/users/4">
        <h1>User 4</h1>
      </Link>
      <Link href="/users/5">
        <h1>User 5</h1>
      </Link>
    </div>
  );
};

export default Page;
