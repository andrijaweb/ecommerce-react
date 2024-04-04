import Star from "./Star";

function Stars({ maxRating, rating }) {
  return (
    <figure className="flex items-center gap-1">
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star key={i} full={i < rating} />
      ))}
    </figure>
  );
}

export default Stars;
