"use client";

import { trpc } from "@/client";

export default function IndexPage() {
  const getUsers = trpc.user.getUsers.useQuery();
  // const [hello, setHello] = useState({ greeting: "" });

  // const fetchData = async () => {
  //   const hello = await trpc.appRouter.hello.useQuery({ text: "client" });
  //   console.log("Hello", hello);

  //   if (!hello.data) return;

  //   setHello(hello.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // });

  if (!getUsers.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{JSON.stringify(getUsers.data)}</p>
    </div>
  );
}
