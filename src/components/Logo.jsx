export default function Logo({ size = 40 }) {
  return (
    <img
      src="public/logo.png"
      alt="GaonKiMakki Logo"
      style={{ height: size }}
      className="object-contain"
    />
  );
}
