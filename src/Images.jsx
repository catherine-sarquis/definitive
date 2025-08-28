export default function Images(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6 md:mb-8">
        {props.images.photos.map(function (image, index) {
          return (
            <img
              src={image.src.landscape}
              alt={image.alt}
              key={index}
              className="object-cover rounded-sm outline outline-indigo-600 shadow-md"
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
