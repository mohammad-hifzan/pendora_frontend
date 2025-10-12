import UserEditor from "../../../common/users/userEditor";

export default function AdminEditUser() {
  return (
    <UserEditor
      fetchUrlBase="/v2/users"
      redirectPath="/workspace/users"
    />
  );
}
