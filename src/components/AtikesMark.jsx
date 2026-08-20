// Placeholder approximation of the ATIKES "A" chevron mark (blue + navy).
// TODO: replace usages of this with the real ATIKES logo file
// (see public/atikes-logo.svg) once you have the source asset.
export default function AtikesMark({ size = 36 }) {
  return (
    <img
      src="/atikes-logo.png"
      alt="ATIKES"
      width={size}
      height={size}
      style={{
        objectFit: "contain",
      }}
    />
  );
}