import ResourcesView from './resources-view';
import { theory } from '@/lib/data/theory';

export default function ResourcesPage() {
  return <ResourcesView theory={theory} />;
}
