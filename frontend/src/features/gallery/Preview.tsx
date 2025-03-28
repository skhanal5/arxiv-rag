import Column from "@/components/containers/Column";

interface PaperProps {
  thumbnail: string;
  authors: string[];
  title: string;
}

export default function Preview({ thumbnail, authors, title }: PaperProps) {
  return (
    <Column>
      <div>{thumbnail}</div>
      <Column>
        <div>{title}</div>
        <div>{authors}</div>
      </Column>
    </Column>
  );
}
