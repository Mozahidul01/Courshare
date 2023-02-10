export default function Checkbox({ text, className, ...rest }) {
  return (
    <label className="text-gray capitalize">
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
}
