export default function CodeBlock({ children }) {
  return (
    <div className="bg-gray-200 p-4 rounded whitespace-pre-wrap break-words text-sm font-mono">
      {children}
    </div>
  );
}
