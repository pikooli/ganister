import { Bold } from "src/components/text";
import dayjs from "src/lib/dayjs";

export default function CreatedAt({
  date,
  format,
}: {
  date?: number;
  format?: string;
}) {
  if (!date) return <></>;
  return (
    <p>
      <Bold text="Create at" /> :
      {dayjs(new Date(date).toDateString()).format(format || "DD/MM/YYYY")}
    </p>
  );
}
