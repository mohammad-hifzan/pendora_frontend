import NovelEdit from "../../../common/novels/edit";

export default function EditNovel() {
  return (
    <>
      <div className="header-spacer"></div>
      <NovelEdit
        fetchUrlBase="/v2/novels"         // API is the same
        redirectPath="/workspace/novels"      // admin route
      />
    </>
  );
}