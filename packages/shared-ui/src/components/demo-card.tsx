// @ts-nocheck
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function DemoCard({ title }: { title: string }) {
  console.log(`DemoCard: ${title} rendered`); // For debugging re-renders

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          This card will re-render every time the theme changes, even though it
          doesn't directly use theme data.
        </p>
      </CardContent>
    </Card>
  );
}
