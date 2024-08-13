export const generateImageURL = ({
  path,
  extension,
}: {
  path: string;
  extension: string;
}) => {
  return path + "." + extension;
};
