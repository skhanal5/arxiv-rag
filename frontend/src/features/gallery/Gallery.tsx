import Container from "@/components/containers/Container";
import { useEffect, useState } from "react";
import Preview from "./Preview";

interface PaperPreview {
  authors: string[];
  title: string;
  thumbnail: string;
}

export default function Gallery() {
  const [papers, setPapers] = useState<PaperPreview[]>([]);

  useEffect(() => {
    const samplePapers = [
      {
        thumbnail: "baz",
        authors: ["subodh", "khanal"],
        title: "bar",
      },
    ];
    setPapers(samplePapers);
  }, []);

  return (
    <Container>
      {papers.map((paper) => (
        <Preview
          thumbnail={paper.thumbnail}
          authors={paper.authors}
          title={paper.title}
        />
      ))}
    </Container>
  );
}
