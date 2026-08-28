interface TechTagProps {
  label: string;
}

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="border-rule/50 text-muted rounded-[2px] border px-2 py-1 font-mono text-xs">
      {label}
    </span>
  );
}
