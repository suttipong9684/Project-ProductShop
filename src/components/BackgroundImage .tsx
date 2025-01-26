
interface BackgroundImageProps {
  imageUrl: string;
}

const BackgroundImage = ({ imageUrl}:BackgroundImageProps) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen bg-cover bg-center -z-10 `}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gray-950  bg-opacity-70"></div>
    </div>
  );
};

export default BackgroundImage;
