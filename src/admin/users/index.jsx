import UsersTable from "../../common/users/usersTable";

export default function AdminUsers() {
  return (
    <>
      <div className="header-spacer"></div>
      <UsersTable 
        fetchUrl="v2/users/company_users" 
        basePath="admin" 
      />
    </>
  );
}