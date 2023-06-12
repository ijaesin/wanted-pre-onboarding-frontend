interface ErrorProps {
  error: string;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="text-lg font-bold text-center text-red-600">{error}</div>
  );
}
