import { useEffect, useState } from "react";
import Preview from "./Preview";
import Grid from "@/components/containers/Grid";
import Column from "@/components/containers/Column";

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
        authors: ["Dr. Diego Fernandez-Lopez", "Prof. Kwame Mensah"],
        title: "The Role of Type Checking in Reducing Runtime Errors in Python",
      },
      {
        thumbnail: "baz",
        authors: ["Dr. Alex Reinhardt", "Prof. Emily Nakamura"],
        title:
          "Security Challenges in Serverless Computing: A Case Study Approach",
      },
      {
        thumbnail: "baz",
        authors: ["Prof. Benjamin Okwuosa", "Dr. Samuel K. Patel"],
        title: "Leveraging AI for Predictive Analytics in Large-Scale Systems",
      },
      {
        thumbnail: "baz",
        authors: ["Dr. Wei-Ling Zhou", "Prof. Ahmed El-Rafiq"],
        title:
          "Memory Management in Golang: Analyzing Garbage Collection Efficiency",
      },
      {
        thumbnail: "baz",
        authors: ["Dr. Sofia Lundström"],
        title:
          "Cost Optimization Strategies for Serverless Applications on AWS",
      },
    ];
    setPapers(samplePapers);
  }, []);

  return (
    <Column className="p-10">
      <Grid className="grid-cols-4 grid-rows-4 gap-5">
        {papers.map((paper) => (
          <Preview
            thumbnail={paper.thumbnail}
            authors={paper.authors}
            title={paper.title}
          />
        ))}
      </Grid>
    </Column>
  );
}
