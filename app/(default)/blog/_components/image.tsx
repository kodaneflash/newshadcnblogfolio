// @ts-nocheck
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";

interface SanityImageAsset {
  _ref?: string;
}

interface ImageComponentProps {
  value: {
    asset?: SanityImageAsset;
    alt?: string;
  };
}

const ImageComponent: React.FC<ImageComponentProps> = ({ value }) => {
  const { asset, alt } = value;

  if (!asset || !asset._ref) {
    return <div>Image not found.</div>;
  }

  const imageUrl = urlForImage({ _ref: asset._ref }).url();

  if (!imageUrl) {
    return <div>Image not found.</div>;
  }

  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
          src={imageUrl}
          width={680}
          height={382}
          alt={alt || ""}
          layout="responsive"
        />
      </div>
      {alt && (
        <figcaption className="mt-3 text-sm text-center text-gray-500 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageComponent;
