const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("...")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
// FetchUserReturnType é um user[]
