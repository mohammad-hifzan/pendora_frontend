import MangaEdit from "../../common/mangas/edit";

export default function AdminEditManga() {
  return (
    <>
      <div className="header-spacer"></div>
      <MangaEdit
        fetchUrlBase="/v2/mangas"         // API is the same
        redirectPath="/admin/mangas"      // admin route
      />
    </>
  );
}
