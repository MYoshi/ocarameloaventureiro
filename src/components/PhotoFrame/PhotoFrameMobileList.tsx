import PhotoFrameImage from './PhotoFrameImage';

type PhotoFrameMobileListProps = {
  imageNumbers: number[];
};

export default function PhotoFrameMobileList({ imageNumbers }: PhotoFrameMobileListProps) {
  return (
    <div className="bg-wood w-full h-auto relative flex flex-col justify-center items-center">
      {imageNumbers.map(num => (
        <PhotoFrameImage key={`photoFrameMobile${num}`} imageSrc={`/images/caramelo${num}.jpg`} imageAlt="O Caramelo Aventureiro" />
      ))}
    </div>
  );
}
