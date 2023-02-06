export default function PageHeader({ title }) {
  return (
    <div className="bg-gradient-to-r from-teal to-hummingBird">
      <p className="text-4xl sm:text-5xl py-16 text-center font-bold text-white">
        {title}
      </p>
    </div>
  );
}
