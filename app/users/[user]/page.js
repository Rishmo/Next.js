// This is a server-side rendered component that gets the dynamic parameter directly from `params`

export default async function UserPage({ params }) {
  const { user } = await params; // Access the dynamic 'user' parameter directly

  return (
    <div>
      <h1>User: {user}</h1>  {/* This will display the user id */}
    </div>
  );
}
