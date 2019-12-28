import React from 'react';
import { ProgressChart } from 'react-native-chart-kit';

class CycleComponent extends React.Component {

  render() {
    const data = {
    labels: ["Data1", "Data2", "Data3"], // optional
    data: [0.4, 0.6, 0.8]
  };

    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
    }

    return (
      <ProgressChart data={data}
                     width={this.props.width}
                     height={this.props.height}
                    chartConfig={chartConfig}
                    hideLegend={this.props.hideLegend} />
    )
  }
}

export default CycleComponent;
