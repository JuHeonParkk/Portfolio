interface TitleProps {
  subTitle: string;
  title: string;
  description: string;
}

export default function Title({ subTitle, title, description }: TitleProps) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-bold tracking-[0.25em] text-primary">
        {subTitle}
      </p>
      <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-primary" />
      <p className="mt-5 text-base text-gray-500">{description}</p>
    </div>
  );
}
