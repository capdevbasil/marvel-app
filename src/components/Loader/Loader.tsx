import { RotatingTriangles } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
}
