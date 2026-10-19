import ResourcesView from './resources-view';
import { theory } from '@/lib/data/theory';
import { jeeClass12 } from '@/lib/data/jee-class12';

export default function ResourcesPage() {
  return <ResourcesView theory={theory} jeeClass12={jeeClass12} />;
}
