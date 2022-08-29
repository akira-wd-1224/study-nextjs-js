import Head from "next/head";
import { UserList } from "src/components/User/UserList";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  const USERS_API_URL = `${API_URL}/users`;
  const users = await fetch(USERS_API_URL);
  const usersData = await users.json();

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};

const Users = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <UserList />
      </SWRConfig>
    </div>
  );
};

export default Users;
