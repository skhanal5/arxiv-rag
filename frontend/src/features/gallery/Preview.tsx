import Column from "@/components/containers/Column";

interface PaperProps {
  thumbnail: string;
  authors: string[];
  title: string;
}

export default function Preview({ thumbnail, authors, title }: PaperProps) {
  return (
    <Column className="p-10 gap-2 rounded-lg border-lg bg-slate-90 hover:cursor-pointer">
      <div className="">
        {thumbnail}
      </div>
      <Column className="gap-2">
        <div className="font-semibold text-xs">{title}</div>
        <div className="text-xs">{authors.join(", ")}</div>
      </Column>
    </Column>
  );
}
