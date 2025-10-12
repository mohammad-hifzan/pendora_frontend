import MangaEdit from "../../../common/mangas/edit";

export default function EditManga() {
  return (
    <>
      <div className="header-spacer"></div>
      <MangaEdit
        fetchUrlBase="/v2/mangas"         // API is the same
        redirectPath="/workspace/mangas"      // admin route
      />
    </>
  );
}
