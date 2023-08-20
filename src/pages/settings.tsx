import { colorSet } from 'src/shared/color';

const Settings = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
    }}
  >
    <h1
      style={{
        color: colorSet.black90,
      }}
    >
      Coming Soon
    </h1>
    <small
      style={{
        color: colorSet.black50,
      }}
    >
      Page under construction
    </small>
  </div>
);

export default Settings;
