import NovelAdd from "../../../common/novels/add";

export default function AddNovel() {
  return (
    <>
      <NovelAdd
        fetchUrlBase="/v2/novels"         // API endpoint
        redirectPath="/workspace/novels"  // workspace route
      />
    </>
  );
}
