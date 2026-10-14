export default function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-[13px] font-semibold tracking-wide text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </div>
  );
}
