import { cn } from '../../lib/utils';
import './separator.css';

interface SeparatorProps {
  upsideDown?: boolean;
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ upsideDown, className }) => {
  return (
    <div className={cn('relative', className)}>
      <div className={cn('separator', upsideDown && 'rotate-180')}></div>
    </div>
  );
};
