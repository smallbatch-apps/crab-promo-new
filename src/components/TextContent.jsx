export default function TextContent({ children }) {
  return (
    <div className="bg-white rounded-lg p-4 border flex flex-col gap-4">
      {children}
    </div>
  );
}
