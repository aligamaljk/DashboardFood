import { App as AppAnt, ConfigProvider, theme } from 'antd';
import AppRouter from './Routes/AppRouter';
import { useAppSelector } from './Store/hooks';

function App() {
  const { dark } = useAppSelector((state) => state.user);
  const token = {
      algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      fontSizeXL: 18,
      fontSizeHeading5: 16,
      fontSizeHeading4: 18,
      fontSizeHeading3: 22,
      fontSizeHeading2: 25,
      fontSizeHeading1: 32,
      marginMD: 24,
      wireframe: false,
      marginLG: 32,
      marginXL: 40,
      paddingMD: 24,
      paddingLG: 32,
      paddingXL: 40,
      borderRadiusSM: 4,
      borderRadiusLG: 12,
      borderRadiusXS: 4,
      fontSize: 16,
      controlHeight: 40,
      contentFontSize: 16,
      fontWeight: 600,
      borderRadius: 8,
    },
  };
  return (
    <>
      <ConfigProvider theme={token}>
        <AppAnt>
          <AppRouter />
        </AppAnt>
      </ConfigProvider>
    </>
  );
}

export default App;
