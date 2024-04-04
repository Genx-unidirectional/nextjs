export default function UserProfilePage({ params }: any) {
  return (
    <div className="flex min-h-screen flex-col gap-2 justify-center items-center">
      <h1 className="text-4xl font-bold ">Profile</h1>
      <hr />
      <div className="flex justify-center items-center">
        <h2 className="text-3xl font-bold mr-4">Page</h2>
        <p>
          <span className="text-3xl  font-bold text-white bg-orange-300 p-1 rounded-lg">
            {params.id}
          </span>
        </p>
      </div>
    </div>
  );
}
