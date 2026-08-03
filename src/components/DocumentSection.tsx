interface DocumentSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function DocumentSection({
  title,
  children,
}: DocumentSectionProps) {
  return (
    <section className="mb-20 scroll-mt-20">
      <h2 className="mb-7 text-2xl font-bold tracking-tight text-gray-950">
        {title}
      </h2>

      {children}
    </section>
  );
}
