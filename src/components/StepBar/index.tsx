import {
  Timeline,
  TimelineProgress,
  TimelineItems,
  TimelineItem,
  TimelineContent,
} from './styles';

interface StepBarProps {
  items: { name: string; active: boolean }[];
}

const StepBar = ({ items }: StepBarProps) => {
  const totalItems = items.length;
  const numberOfActiveItems = items.filter((item: any) => item.active).length;
  const progressBarWidth =
    totalItems > 1 ? ((numberOfActiveItems - 1) / (totalItems - 1)) * 100 : 0;

  return (
    <Timeline>
      <TimelineProgress
        style={{ width: `${progressBarWidth}%` }}
      ></TimelineProgress>
      <TimelineItems>
        {items.map((item, i) => (
          <TimelineItem
            style={
              item.active
                ? { backgroundColor: `#e02b57`, borderRadius: `100%` }
                : { backgroundColor: `#ccc`, borderRadius: `100%` }
            }
            key={i}
          >
            <TimelineContent
              style={
                item.active
                  ? { color: `#fff`, backgroundColor: `#e02b57` }
                  : { backgroundColor: `#ddd` }
              }
            >
              {item.name}
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineItems>
    </Timeline>
  );
};

export default StepBar;
