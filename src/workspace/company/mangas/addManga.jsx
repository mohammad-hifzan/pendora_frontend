import MangaAdd from "../../../common/mangas/add";

export default function AddManga() {
  return (
    <>
      <MangaAdd
        fetchUrlBase="/v2/mangas"         // API is the same
        redirectPath="/workspace/mangas"      // workspace route
      />
    </>
  );
}
