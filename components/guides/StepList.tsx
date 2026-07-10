export type Step = {
  title: string;
  description: string;
};

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="flex flex-col gap-4">
      {steps.map((step, index) => (
        <li key={step.title} className="glass-card flex gap-5 p-5 sm:p-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark font-display text-base font-semibold text-bg">
            {index + 1}
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
