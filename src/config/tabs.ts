export interface TabProps {
  label: string;
  title: string;
  sceneKey: string;
}

export const tabs: TabProps[] = [
  {
    label: 'Cases',
    title: 'Confirmed Cases',
    sceneKey: '_confirmedCases',
  },
  {
    label: 'Recoveries',
    title: 'Recoveries',
    sceneKey: '_recoveredCases',
  },
  {
    label: 'Deaths',
    title: 'Deaths',
    sceneKey: '_deathCases',
  },
  {
    label: 'Tests',
    title: 'Tests',
    sceneKey: '_testCases',
  },
];

export default tabs;
