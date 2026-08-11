interface CalloutProps {
  label: string;
  content: string;
  items?: string[];
  variant: "problem" | "solution" | "result";
}

const calloutStyles = {
  problem: {
    container: "border-red-100 bg-red-50/60",
    icon: "⚠️",
  },
  solution: {
    container: "border-blue-100 bg-blue-50/60",
    icon: "💡",
  },
  result: {
    container: "border-emerald-100 bg-emerald-50/60",
    icon: "✅",
  },
};

export default function Callout({
  label,
  content,
  items = [],
  variant,
}: CalloutProps) {
  const style = calloutStyles[variant];

  return (
    <div
      className={`flex items-start gap-3 rounded-lg border p-4 sm:p-5 ${style.container}`}
    >
      <span className="mt-0.5 text-lg" aria-hidden="true">
        {style.icon}
      </span>

      <div className="min-w-0 flex-1">
        <h4 className="mb-2 text-base font-bold text-gray-900">{label}</h4>

        <p className="text-base leading-7 text-gray-700">{content}</p>

        {!!items.length && (
          <ul className="mt-3 space-y-2">
            {items.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="flex items-start gap-2 text-base leading-7 text-gray-600"
              >
                <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
