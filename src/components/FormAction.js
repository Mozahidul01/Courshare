export default function FormAction({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) {
  return (
    <>
      {type === "Button" && (
        <div className="mt-6">
          <button type={action} className="form-btn" onSubmit={handleSubmit}>
            {text}
          </button>
        </div>
      )}
    </>
  );
}
