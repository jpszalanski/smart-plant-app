declare module 'react-gauge-chart' {
    import { FC } from 'react';
  
    interface GaugeProps {
      id?: string;
      className?: string;
      style?: React.CSSProperties;
      nrOfLevels?: number;
      percent?: number;
      arcPadding?: number;
      cornerRadius?: number;
      colors?: string[];
      arcWidth?: number;
      arcsLength?: number[];
      textColor?: string;
      needleColor?: string;
      needleBaseColor?: string;
      hideText?: boolean;
      formatTextValue?: (value: number) => string;
    }
  
    const GaugeChart: FC<GaugeProps>;
    export default GaugeChart;
  }
  